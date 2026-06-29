import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Cardiff Gate International Business Park',
    template: '%s | Cardiff Gate',
  },
  description:
    'Cardiff Gate International Business Park — premium office space and business options at M4 Junction 30, Cardiff. Home to 80+ leading organisations.',
  keywords: ['Cardiff Gate', 'business park', 'office space', 'Cardiff', 'M4 Junction 30', 'commercial property'],
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
