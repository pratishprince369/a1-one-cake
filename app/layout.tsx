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
  title: 'A-One Cake | Artistry in Every Slice',
  description: 'Custom baked cakes for every occasion. Best Sellers, Collections, and Custom Orders. Where Art Meets Taste.',
  keywords: 'a one cake, custom cakes, wedding cakes, birthday cakes, best seller cakes, order cake online',
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
