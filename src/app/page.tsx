import Image from 'next/image'
import {  Laptop, Cpu, HardDrive } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
  
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to TechHub</h1>
            <p className="text-xl mb-6">Your one-stop shop for all things computers and technology.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/gg.avif"
              alt="Modern computer setup"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Laptop className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Laptops</h3>
              <p className="text-gray-600">Find the perfect portable computer for your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Cpu className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Components</h3>
              <p className="text-gray-600">Upgrade your system with the latest hardware.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <HardDrive className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Storage</h3>
              <p className="text-gray-600">Expand your storage capacity with our wide range of options.</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}

