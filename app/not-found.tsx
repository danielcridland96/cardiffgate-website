import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-navy-800 text-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">404</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Page not found</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Head back to explore available spaces or get in touch with our team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/spaces" className="btn-outline">View Spaces</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
