import { Inter } from 'next/font/google'

import './globals.css'
import Header from '@/components/Commen/Header'
import Footer from '@/components/Commen/Footer'
import Providers from '@/Redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechShop - Your One-Stop Tech Store',
  description: 'Find the latest technology products and gadgets at TechShop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          
          
          <main className="flex-grow">
           <Providers> 
           <Header />
            {children}
            </Providers>  
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

