"use client";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLoginMutation } from "@/Redux/features/authApiSlice";
import { setCredentials, selectuser } from "@/Redux/features/authSlice";
import Swal from "sweetalert2";
import type { User } from "@/types/user"

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const user = useSelector(selectuser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Log the form data being sent
      console.log("Sending login request with:", formData);

      const response = await login(formData).unwrap();

      // Log the full response to see its structure
      console.log("Raw API Response:", response);

      // Check if response is the direct user and token data
      if ("user" in response && "token" in response) {
        dispatch(setCredentials({
          user: response.user as User,
          token: response.token as string
        }));
      }
      // Check if data is nested under a data property
      else if (response.data?.user && response.data?.token) {
        dispatch(setCredentials({
          user: response.data.user,
          token: response.data.token
        }));
      }
      else {
        throw new Error('Invalid response format from server');
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login successful",
      });

    } catch (err) {
      console.error("Login error details:", err);

      const errorMessage =  'Something went wrong during login';
      
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    }
  };

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don&#39;t have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
