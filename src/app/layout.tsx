import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'New Mumbai Family Dhaba | TPT Road, Taduku R.S.',
  description: 'Authentic Indian cuisine — Non-Veg & Veg items. Curries, Biryanis, Fry items and more. Located on TPT Road, Taduku R.S.',
  keywords: 'New Mumbai Family Dhaba, Taduku, biryani, chicken curry, non-veg, veg, restaurant menu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
