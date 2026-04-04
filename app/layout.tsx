import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lolasystems.com'),
  title: {
    default: 'Foundation OS — Lola | Systems Architect',
    template: '%s | Foundation OS by Lola',
  },
  description:
    'Build your first real business system. Foundation OS gives you everything you need to start signing clients — funnel, payments, booking, and automation — built for you or with you.',
  keywords: [
    'business systems',
    'foundation OS',
    'systems architect',
    'business automation',
    'funnel setup',
    'booking system',
    'entrepreneur',
    'small business',
  ],
  authors: [{ name: 'Lola', url: 'https://www.instagram.com/lola.longevity' }],
  creator: 'Lola',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lolasystems.com',
    siteName: 'Foundation OS by Lola',
    title: 'Foundation OS — Build Your First Real Business System',
    description:
      'Foundation OS gives you everything you need to start signing clients — funnel, payments, booking, and automation — built for you or with you.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Foundation OS by Lola',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation OS — Build Your First Real Business System',
    description:
      'Foundation OS gives you everything you need to start signing clients — funnel, payments, booking, and automation — built for you or with you.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-cream text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
