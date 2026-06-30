import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://cardiffgate.com'),
  title: {
    default: 'Cardiff Gate International Business Park',
    template: '%s | Cardiff Gate',
  },
  description:
    'Cardiff Gate International Business Park — premium office space and business options at M4 Junction 30, Cardiff. Home to 80+ leading organisations.',
  keywords: ['Cardiff Gate', 'business park', 'office space', 'Cardiff', 'M4 Junction 30', 'commercial property'],
  icons: {
    icon: '/park-hero.png',
    apple: '/park-hero.png',
  },
  openGraph: {
    siteName: 'Cardiff Gate International Business Park',
    title: 'Cardiff Gate International Business Park',
    description:
      'Premium office space and business options at M4 Junction 30, Cardiff. Home to 80+ leading organisations.',
    type: 'website',
    url: 'https://cardiffgate.com',
    images: [{ url: '/park-main.jpg', width: 1200, height: 630, alt: 'Cardiff Gate International Business Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardiff Gate International Business Park',
    description: 'Premium office space at M4 Junction 30, Cardiff.',
    images: ['/park-main.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
