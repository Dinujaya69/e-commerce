import React from 'react'
import Image from "next/image";

// This would typically come from an API or database
const products = [
  {
    id: 1,
    name: "MacBook Pro 16",
    price: 2499,
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1999,
    description: "Intel i9, 32GB RAM, 1TB SSD",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "ThinkPad X1 Carbon",
    price: 1799,
    description: "Intel i7, 16GB RAM, 512GB SSD",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "ROG Gaming Laptop",
    price: 2299,
    description: "RTX 4080, 32GB RAM, 1TB SSD",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Surface Laptop 5",
    price: 1299,
    description: "Intel i5, 8GB RAM, 256GB SSD",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Razer Blade 15",
    price: 2699,
    description: "RTX 4090, 32GB RAM, 1TB SSD",
    image: "/placeholder.svg?height=200&width=300",
  },
];
const ProductCart = () => {
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
