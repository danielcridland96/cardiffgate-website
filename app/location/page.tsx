import type { Metadata } from 'next'
import LocationClient from './LocationClient'

export const metadata: Metadata = {
  title: 'Location & Transport',
  description: 'How to get to Cardiff Gate International Business Park — by road, rail, bus and air.',
}

export default function LocationPage() {
  return (
    <>
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">Getting here</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Location &amp; Transport</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cardiff Gate sits directly off M4 Junction 30 — 15 minutes northeast of Cardiff city centre, with
            approximately 1.2 million people within a 45-minute drive.
          </p>
        </div>
      </section>
      <LocationClient />
    </>
  )
}
