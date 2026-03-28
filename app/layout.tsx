import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const dmSerif = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Shiftly - Shifting Towards Nature',
  description: 'Your store for vegetables grown with 100% renewable energy. Fresh, fairly priced produce that is lighter on the planet.',
  keywords: ['organic vegetables', 'renewable energy', 'sustainable farming', 'green produce', 'eco-friendly'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
