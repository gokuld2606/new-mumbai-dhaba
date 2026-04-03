import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: 'New Mumbai Family Dhaba',
  description: 'Authentic Indian cuisine — Scan, Order, Enjoy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
