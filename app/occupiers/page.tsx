import type { Metadata } from 'next'
import { OccupierLogo } from '@/components/LogoImage'

export const metadata: Metadata = {
  title: 'Occupiers',
  description: 'Meet the leading organisations based at Cardiff Gate International Business Park.',
}

const occupiers: Record<string, { name: string; domain?: string }[]> = {
  A: [
    { name: 'Advocacy Support Cymru' },
    { name: 'ADT House' },
    { name: 'Asbri Planning' },
    { name: 'Ash Tree Clinic' },
    { name: 'Atlantic Property Developments' },
    { name: 'Azets Holdings', domain: 'azets.co.uk' },
  ],
  B: [
    { name: 'Bartholomew Financial Limited' },
    { name: 'Bartholomew Hawkins Ltd' },
    { name: 'Biotal' },
    { name: 'Boyer Planning' },
    { name: 'BPU Chartered Accountants' },
    { name: 'Briscombe Care' },
    { name: 'BT Local Business', domain: 'bt.com' },
    { name: 'Bullock' },
    { name: 'Busy Bees', domain: 'busybees.com' },
  ],
  C: [
    { name: 'Carbon60 Limited', domain: 'carbon60.com' },
    { name: 'Cardiff Audi' },
    { name: 'Castleoak Care Partnership' },
    { name: 'Chessmann' },
    { name: 'chin-wag.com' },
    { name: 'Circle IT Solutions Ltd' },
    { name: 'Coca Cola', domain: 'coca-cola.com' },
    { name: 'Coors', domain: 'coors.com' },
    { name: 'CPS Group', domain: 'cpsgroup.co.uk' },
  ],
  E: [
    { name: 'Eco2' },
    { name: 'eMag Europe' },
  ],
  F: [
    { name: 'Foster Care Associates Cymru', domain: 'thefca.co.uk' },
    { name: 'Freshwater', domain: 'freshwateruk.com' },
  ],
  G: [
    { name: 'George Wimpey', domain: 'taylorwimpey.co.uk' },
    { name: 'Glamorgan Telecom' },
    { name: 'Gleeds', domain: 'gleeds.com' },
    { name: 'Governors Wales' },
    { name: 'Grosvenor Butterworth' },
  ],
  I: [
    { name: 'Ian Williams', domain: 'ianwilliams.co.uk' },
    { name: 'Ibis', domain: 'ibis.com' },
    { name: 'Icom' },
    { name: 'Imtech Water Waste and Energy' },
    { name: 'Innermost Learning' },
    { name: 'Insight Law Cardiff' },
    { name: 'International Baccalaureate Organization', domain: 'ibo.org' },
  ],
  K: [
    { name: 'Kennedy James Griffiths' },
    { name: 'KGB (UK) Ltd' },
    { name: 'Kier Group', domain: 'kier.co.uk' },
  ],
  L: [
    { name: 'Leadbitter Construction' },
    { name: 'Leading Edge Group UK' },
    { name: 'Linaker Green Ltd' },
    { name: 'Lloyds Banking Group', domain: 'lloydsbankinggroup.com' },
  ],
  M: [
    { name: 'Marketing Tom Media' },
    { name: 'Maskell Moss & Co.' },
    { name: 'Mercedes-Benz', domain: 'mercedes-benz.com' },
    { name: 'MHA Broomfield Alexander', domain: 'mha.co.uk' },
    { name: 'Mitie', domain: 'mitie.com' },
    { name: 'Moginie James', domain: 'moginiejames.co.uk' },
    { name: 'Molson Coors Brewing Company', domain: 'molsoncoors.com' },
    { name: 'MPCT' },
    { name: 'Mudiad Ysgolian Meithrin' },
  ],
  N: [
    { name: 'NASUWT Cymru', domain: 'nasuwt.org.uk' },
  ],
  P: [
    { name: 'PMG Group' },
    { name: 'PMH UK Ltd' },
  ],
  Q: [
    { name: 'QTS Ltd.' },
  ],
  R: [
    { name: 'RCN Direct', domain: 'rcn.org.uk' },
    { name: 'Redrow Homes', domain: 'redrow.co.uk' },
    { name: 'Regus Plc.', domain: 'regus.com' },
    { name: 'RES', domain: 'res-group.com' },
    { name: 'Rhomco Consulting' },
    { name: 'Royal Pharmaceutical Society of Great Britain', domain: 'rpharms.com' },
  ],
  S: [
    { name: 'SBW Wales' },
    { name: 'Scottish & Southern Energy', domain: 'sse.com' },
    { name: 'Secure Law' },
    { name: 'Shear Design Ltd.' },
    { name: 'Shell', domain: 'shell.com' },
    { name: 'Smiles Dental', domain: 'smilesdental.co.uk' },
    { name: 'SMS Plc', domain: 'sms-plc.com' },
    { name: 'Sofa Brands International' },
    { name: 'Spie Matthew Hall' },
    { name: 'Sports Xtra' },
    { name: 'St. James Parade' },
    { name: 'SWALEC & Atlantic Electric and Gas' },
  ],
  T: [
    { name: 'The Independent General Practice' },
    { name: 'The Orthodontic Centre' },
    { name: 'Tidal Energy' },
    { name: 'Toby Carvery', domain: 'tobycarvery.co.uk' },
    { name: 'Transport for Wales', domain: 'tfw.wales' },
  ],
  U: [
    { name: 'UME Diagnostics' },
    { name: 'United Living', domain: 'unitedliving.co.uk' },
    { name: 'Usdaw', domain: 'usdaw.org.uk' },
  ],
  V: [
    { name: 'Virgin Media', domain: 'virginmedia.com' },
  ],
  W: [
    { name: 'Waitrose', domain: 'waitrose.com' },
    { name: 'Watkins Jones', domain: 'watkinsjones.com' },
    { name: 'Watts Gregory Chartered Accountants' },
    { name: 'Welcome Break Services', domain: 'welcomebreak.co.uk' },
    { name: 'Welsh Power Group' },
    { name: 'Westcoast Labs' },
    { name: 'WH Smith', domain: 'whsmith.co.uk' },
    { name: 'WRVS', domain: 'royalvoluntaryservice.org.uk' },
  ],
}

export default function OccupiersPage() {
  const letters = Object.keys(occupiers).sort()
  const total = Object.values(occupiers).flat().length

  return (
    <>
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">Our community</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Occupiers</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cardiff Gate is home to {total}+ leading organisations spanning financial services, energy, retail, healthcare,
            education and more.
          </p>
        </div>
      </section>

      {/* Alphabet jump nav */}
      <nav className="sticky top-16 bg-white border-b border-gray-100 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {letters.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="w-8 h-8 flex items-center justify-center rounded text-sm font-semibold text-navy-800 hover:bg-gold-500 hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {letters.map((letter) => (
              <div key={letter} id={letter} className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-2xl font-extrabold text-navy-800 w-8">{letter}</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {occupiers[letter].map((o) => (
                    <OccupierLogo key={o.name} name={o.name} domain={o.domain} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
