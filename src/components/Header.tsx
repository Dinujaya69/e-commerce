import Link from 'next/link'
import { ShoppingCart, Search, Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <Link href="/" className="text-2xl font-bold text-wrap">
              TechShop
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-purple-400">Home</Link>
            <Link href="/products" className="text-white hover:text-purple-400">Products</Link>
            <Link href="/about" className="text-white hover:text-purple-400">About</Link>
            <Link href="/contact" className="text-white hover:text-purple-400">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-white hover:text-blue-800">
              <Search className="h-6 w-6" />
            </button>
            <button aria-label="Shopping Cart" className="text-white hover:text-blue-800">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

