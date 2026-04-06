import { Inter, Playfair_Display } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: '6ix Donutz | Hot & Fresh Mini Donuts',
  description: 'Hot & Fresh Mini Donuts made to order. Experience the best mini donuts — halal, fresh, egg-free. Order now for events, catering, and walk-up service.',
  keywords: '6ix donutz, mini donuts, fresh donuts, halal donuts, catering, donut shop',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
