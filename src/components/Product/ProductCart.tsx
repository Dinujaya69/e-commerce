"use client";
import React from 'react'
import Image from "next/image";
import { products } from '@/data/product';
import { useSelector } from 'react-redux';
import type { RootState } from '@/Redux/store/store'
//import { useGetProductsQuery } from '@/Redux/features/productSlice';
const ProductCart = () => {
  const products = useSelector((state: RootState) => state.productSlice);

  //const products = useGetProductsQuery().data || [];



  return (
    <div className="min-h-screen bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-[200px] w-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-purple-600">${product.price}</p>
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
}

export default ProductCart
