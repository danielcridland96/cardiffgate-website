import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Amenities',
  description: 'On-site amenities and facilities at Cardiff Gate International Business Park.',
}

const categories = [
  {
    icon: '🅿️',
    title: 'Parking',
    items: [
      'Excellent car parking — circa 1:210 sq ft allocation',
      'Additional paid parking available on site',
      'Car sharing scheme via dedicated website',
      'Automatic traffic management system at motorway junction',
    ],
  },
  {
    icon: '🏨',
    title: 'Accommodation & Dining',
    items: [
      '78-bedroom Ibis Hotel on site',
      'Toby Carvery restaurant and pub',
      'Waitrose supermarket',
      'Starbucks coffee',
      'WH Smith',
    ],
  },
  {
    icon: '💼',
    title: 'Business Services',
    items: [
      'Regus serviced offices',
      'Regus seminar and meeting room hire',
      'Regular occupier newsletter and community updates',
    ],
  },
  {
    icon: '👶',
    title: 'Childcare & Healthcare',
    items: [
      'Just Learning crèche facility',
      'The Independent General Practice (private doctors)',
      'The Orthodontic Centre',
      'Smiles Dental practice',
    ],
  },
  {
    icon: '🚗',
    title: 'Vehicle Services',
    items: [
      'Cardiff Audi — sales and servicing',
      'Mercedes-Benz — sales and servicing',
      'Smart Repair Centres',
    ],
  },
  {
    icon: '🔒',
    title: 'Security & Infrastructure',
    items: [
      '24-hour on-site security',
      'CCTV throughout',
      'High-speed fibre internet connectivity',
      'Modern, well-maintained estate management',
    ],
  },
  {
    icon: '🛍️',
    title: 'Retail & Leisure Nearby',
    items: [
      'Cardiff Gate Retail Park adjacent (Asda, B&Q, McDonald\'s)',
      'Ibis Hotel for visiting clients and colleagues',
      'Residential neighbourhoods of Pontprennau, Cyncoed and Lisvane nearby',
    ],
  },
]

export default function AmenitiesPage() {
  return (
    <>
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">On-site facilities</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Amenities</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cardiff Gate is more than an office address. From hotels and restaurants to crèches and car dealerships,
            everything you need is right here.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h2 className="text-lg font-bold text-navy-800 mb-4">{cat.title}</h2>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1 w-4 h-4 rounded-full bg-gold-500 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Come and see for yourself</h2>
          <p className="text-gray-300 mb-6">
            Arrange a park tour and experience Cardiff Gate first-hand. Our leasing team will be happy to show you around.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Viewing
          </Link>
        </div>
      </section>
    </>
  )
}
