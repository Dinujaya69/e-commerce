import Link from "next/link";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Header = () => {
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
            <Link href="#" className="hover:text-purple-400">
              About
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 cursor-pointer" />
            <ShoppingCart className="h-6 w-6 cursor-pointer" />
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
