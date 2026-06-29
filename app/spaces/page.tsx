import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spaces Available',
  description: 'Available office spaces and commercial units at Cardiff Gate International Business Park.',
}

const spaces = [
  {
    name: 'Ashtree Court',
    type: 'Office Suites',
    status: 'Available',
    description:
      'Contemporary, flexible office suites set within a well-maintained courtyard environment. Ideal for companies seeking modern, professional accommodation with excellent shared facilities.',
    features: ['Flexible floor plates', 'Car parking included', 'Shared reception', 'Meeting rooms available'],
  },
  {
    name: 'Copse Walk',
    type: 'Office Accommodation',
    status: 'Available',
    description:
      'A range of modern office accommodation set in a pleasant landscaped setting. Copse Walk offers high quality space suitable for a variety of occupiers.',
    features: ['Natural landscaping', 'On-site parking', 'Energy efficient', 'Fibre connectivity'],
  },
  {
    name: 'Laburnum House',
    type: 'Standalone Building',
    status: 'Available',
    description:
      'A self-contained headquarters opportunity offering prominent frontage and brand visibility within the park. Suited to a single occupier requiring a dedicated presence.',
    features: ['Prominent frontage', 'Self-contained', 'Large parking allocation', 'Bespoke fit-out potential'],
  },
  {
    name: 'Lime Tree Court',
    type: 'Office Campus',
    status: 'Available',
    description:
      'Spacious modern offices arranged around a landscaped court. Lime Tree Court provides excellent natural light, generous floor plates and strong staff amenity.',
    features: ['Generous floor plates', 'Excellent natural light', 'Landscaped surroundings', 'Ample parking'],
  },
  {
    name: 'Retail Pod Development',
    type: 'Retail / Leisure',
    status: 'Opportunity',
    description:
      "A planning-consented retail pod development offering an exciting opportunity to serve the park's growing business and residential catchment.",
    features: ['Planning consent in place', 'High footfall location', 'Flexible unit sizes', 'Adjacent to motorway services'],
  },
  {
    name: 'Design & Build',
    type: 'Bespoke',
    status: 'On Request',
    description:
      'For larger occupiers, Cardiff Gate offers design and build opportunities allowing you to create a purpose-built, bespoke facility tailored to your exact requirements.',
    features: ['Bespoke specification', 'Freehold or leasehold', 'Scalable footprint', 'Landmark campus potential'],
  },
]

const statusColour: Record<string, string> = {
  Available: 'bg-green-100 text-green-800',
  Opportunity: 'bg-blue-100 text-blue-800',
  'On Request': 'bg-amber-100 text-amber-800',
}

export default function SpacesPage() {
  return (
    <>
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">What&apos;s available</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Spaces Available</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From flexible suites to standalone headquarters and bespoke build-to-suit opportunities — Cardiff Gate has space
            to suit every ambition.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space) => (
              <div key={space.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-40 relative overflow-hidden">
                  <img src="/park-hero.png" alt={space.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy-900/50 flex items-end p-5">
                    <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">{space.type}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2 className="text-xl font-bold text-navy-800">{space.name}</h2>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${statusColour[space.status]}`}>
                      {space.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">{space.description}</p>
                  <ul className="space-y-1 mb-6">
                    {space.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-gold-500 flex-shrink-0 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-auto block text-center bg-navy-800 hover:bg-navy-700 text-white font-semibold py-2.5 rounded transition-colors text-sm"
                  >
                    Enquire about this space
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">Not sure what you need?</h2>
          <p className="text-navy-700 mb-6">
            Our leasing team at JLL can help you identify the right space and specification for your business. Get in touch for a confidential discussion.
          </p>
          <Link href="/contact" className="inline-block bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded transition-colors">
            Talk to the leasing team
          </Link>
        </div>
      </section>
    </>
  )
}
