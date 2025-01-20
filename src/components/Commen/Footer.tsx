import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              TechShop is your one-stop destination for all your technology needs. We offer a wide range of products and exceptional customer service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              123 Tech Street<br />
              Techville, TX 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@techshop.com
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

