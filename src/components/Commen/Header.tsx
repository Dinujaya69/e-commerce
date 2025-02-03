"use client";
import Link from "next/link";
import { ShoppingCart, Search, Menu, User, LogOut } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { selectuser, logout } from "@/Redux/features/authSlice";
import { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  // other properties
}

const Header = () => {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Flag to check if it's a client-side render

  useEffect(() => {
    setIsClient(true); // Set to true when client-side render is complete
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isClient) {
    return null; // Return nothing before the client-side rendering
  }

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <Link href="/" className="text-2xl font-bold">
              TechHub
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
            <Link href="/Product" className="hover:text-purple-400">
              Products
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Services
            </Link>
            <Link href="/about" className="hover:text-purple-400">
              About
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 cursor-pointer" />
            <ShoppingCart className="h-6 w-6 cursor-pointer" />

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 hover:text-purple-400 rounded transition"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">
                    {user?.full_name || "User"}
                  </span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="px-4 py-2 border border-transparent text-white hover:text-purple-400 rounded transition"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 border border-white text-white hover:bg-purple-400 hover:text-white rounded transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
