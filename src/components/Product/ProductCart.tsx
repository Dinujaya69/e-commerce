"use client";
import React from "react";
import Image from "next/image";
import { useGetProductsQuery } from "@/Redux/features/productSlice";
import { BASE_URL } from "@/utils/apiConfig";

const ProductCart = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <p className="text-center text-lg font-semibold">Loading products...</p>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 text-lg font-semibold">
        Failed to load products.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={`${BASE_URL}/${product.image}`}
                  alt={product.ProductName || "Product Image"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {product.ProductName || "Unnamed Product"}
                </h2>
                <p className="text-gray-600 mb-4">
                  {product.description || "No description available."}
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  ${product.price ?? "N/A"}
                </p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
