import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/park-hero.png" alt="Cardiff Gate International Business Park" width={325} height={202} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cardiff&apos;s premier business destination. High quality office space at M4 Junction 30,
              with unrivalled connectivity and amenities.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Spaces Available', '/spaces'],
                ['Occupiers', '/occupiers'],
                ['Amenities', '/amenities'],
                ['Location & Transport', '/location'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-gray-400">Address</div>
                <div>M4, Junction 30, Cardiff Gate</div>
                <div>Cardiff CF23 8BA</div>
              </div>
              <div>
                <div className="text-gray-400">Phone</div>
                <a href="tel:02920545300" className="hover:text-gold-400 transition-colors">
                  029 2054 5300
                </a>
              </div>
              <div>
                <div className="text-gray-400">Leasing Enquiries</div>
                <div>JLL — Rhydian Morris</div>
                <a href="mailto:rhydian.morris@eu.jll.com" className="hover:text-gold-400 transition-colors text-xs">
                  rhydian.morris@eu.jll.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cardiff Gate International Business Park. All rights reserved.</p>
          <p>Leasing by JLL</p>
        </div>
      </div>
    </footer>
  )
}
