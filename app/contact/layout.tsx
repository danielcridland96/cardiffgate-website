import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the leasing team at JLL to enquire about available office space at Cardiff Gate International Business Park.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
