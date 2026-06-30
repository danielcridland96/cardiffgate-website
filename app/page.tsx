import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cardiff Gate International Business Park',
  description:
    'Cardiff Gate International Business Park offers premium office space at M4 Junction 30, Cardiff. Flexible suites, design & build opportunities, and 80+ occupying businesses.',
}

const stats = [
  { value: 'M4 J30', label: 'Motorway Access' },
  { value: '1.2M', label: 'People within 45 mins' },
  { value: '80+', label: 'Occupying Businesses' },
  { value: '24/7', label: 'On-site Security' },
]

const highlights = [
  {
    icon: '🏢',
    title: 'Premium Office Space',
    body: 'High quality, flexible office accommodation from individual suites to large campus-style buildings.',
  },
  {
    icon: '🛣️',
    title: 'Unrivalled Connectivity',
    body: 'Direct access at M4 Junction 30. Cardiff city centre in 15 minutes, Bristol in 35, Birmingham in under 2 hours.',
  },
  {
    icon: '☕',
    title: 'On-site Amenities',
    body: 'Hotel, restaurant, Waitrose, Starbucks, WH Smith, crèche, dental and medical services — all on your doorstep.',
  },
  {
    icon: '🤝',
    title: 'Thriving Community',
    body: 'Join global names including Coca-Cola, Lloyds Banking Group, Shell, Mercedes-Benz and the International Baccalaureate Organisation.',
  },
]

const featuredSpaces = [
  {
    name: 'Ashtree Court',
    type: 'Office Suite',
    image: '/ashtree-court.jpg',
    description: 'Contemporary office accommodation in a landscaped court setting.',
  },
  {
    name: 'Copse Walk',
    type: 'Office Accommodation',
    image: '/copse-walk.jpg',
    description: 'Modern office accommodation set in a pleasant landscaped setting.',
  },
  {
    name: 'Design & Build',
    type: 'Bespoke',
    image: '/park-main.jpg',
    description: 'Tailor-made build-to-suit solutions for larger occupiers.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <Image src="/park-main.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-navy-900/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-block bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
              M4 Junction 30 · Cardiff
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Cardiff&apos;s Premier
              <br />
              <span className="text-gold-400">Business Destination</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Cardiff Gate International Business Park offers high quality office space and tailor-made business options
              in one of Wales&apos; most connected locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/spaces" className="btn-primary">
                View Available Spaces
              </Link>
              <Link href="/contact" className="btn-outline">
                Make an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-600">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-navy-900">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-navy-700 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cardiff Gate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Cardiff Gate?</h2>
            <p className="section-subheading mx-auto">
              Everything a modern business needs — in one connected, thriving location.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-bold text-navy-800 text-lg mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="section-heading">Available Spaces</h2>
              <p className="text-gray-500">From serviced suites to bespoke build-to-suit opportunities.</p>
            </div>
            <Link href="/spaces" className="text-gold-600 font-semibold hover:text-gold-500 transition-colors whitespace-nowrap">
              View all spaces →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredSpaces.map((space) => (
              <div
                key={space.name}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="h-36 relative overflow-hidden">
                  <Image src={space.image} alt={space.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-navy-900/50 flex items-end p-4">
                    <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">{space.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-800 text-lg mb-2">{space.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{space.description}</p>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-gold-600 hover:text-gold-500 group-hover:underline"
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occupiers teaser */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-4">Home to 80+ leading organisations including Coca-Cola, Lloyds Banking Group, Shell, Mercedes-Benz and the International Baccalaureate Organisation.</p>
          <Link href="/occupiers" className="text-gold-600 font-semibold hover:text-gold-500 transition-colors text-sm">
            View all occupiers →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to find your next office?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch with our leasing team at JLL to discuss availability and arrange a viewing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/location" className="btn-outline">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
