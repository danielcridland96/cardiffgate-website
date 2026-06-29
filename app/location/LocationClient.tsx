'use client'

import { useState } from 'react'
import Link from 'next/link'

type Mode = 'all' | 'road' | 'rail' | 'bus' | 'air'

const journeyTimes = [
  { mode: 'road' as Mode, icon: '🚗', label: 'Cardiff City Centre', time: '15 min' },
  { mode: 'road' as Mode, icon: '🚗', label: 'Bristol',             time: '35 min' },
  { mode: 'road' as Mode, icon: '🚗', label: 'Birmingham',          time: '110 min' },
  { mode: 'road' as Mode, icon: '🚗', label: 'London',              time: '2 hrs 20 min' },
  { mode: 'rail' as Mode, icon: '🚂', label: 'Cardiff Central',     time: '15 min' },
  { mode: 'rail' as Mode, icon: '🚂', label: 'Newport',             time: '15 min' },
  { mode: 'rail' as Mode, icon: '🚂', label: 'London Paddington',   time: '~2 hrs' },
  { mode: 'air'  as Mode, icon: '✈️', label: 'Cardiff Airport',     time: '23 min' },
  { mode: 'air'  as Mode, icon: '✈️', label: 'London Heathrow',     time: '2 hrs 23 min' },
  { mode: 'bus'  as Mode, icon: '🚌', label: 'Cardiff Bus X59',     time: 'Regular service' },
]

const tabs: { id: Mode; label: string; icon: string }[] = [
  { id: 'all',  label: 'All',  icon: '📍' },
  { id: 'road', label: 'Road', icon: '🚗' },
  { id: 'rail', label: 'Rail', icon: '🚂' },
  { id: 'bus',  label: 'Bus',  icon: '🚌' },
  { id: 'air',  label: 'Air',  icon: '✈️' },
]

const transportDetail: Record<Exclude<Mode, 'all'>, { heading: string; body: string }> = {
  road: {
    heading: 'By Road',
    body: 'Leave the M4 at Junction 30 and follow signs for Cardiff Gate. The business park is immediately accessible from the roundabout. An automatic traffic management system at the junction helps maintain smooth flow at peak times.',
  },
  rail: {
    heading: 'By Rail',
    body: 'Cardiff Central and Newport stations are both approximately 15 minutes away by car or taxi. GWR connects Cardiff Central to London Paddington in approximately 2 hours, making Cardiff Gate viable for regular London visitors.',
  },
  bus: {
    heading: 'By Bus',
    body: 'Cardiff Bus operates the X59 service connecting the park to Cardiff city centre and surrounding residential neighbourhoods including Pontprennau, Cyncoed and Lisvane.',
  },
  air: {
    heading: 'By Air',
    body: 'Cardiff Airport is 23 minutes by road with routes to major UK and European destinations. London Heathrow — the UK\'s largest international hub — is approximately 2 hours 23 minutes via the M4, giving Cardiff Gate excellent global connectivity.',
  },
}

export default function LocationClient() {
  const [activeTab, setActiveTab] = useState<Mode>('all')

  const filtered = activeTab === 'all'
    ? journeyTimes
    : journeyTimes.filter((j) => j.mode === activeTab)

  return (
    <>
      {/* Interactive Google Map */}
      <section className="relative">
        <div className="h-[420px] md:h-[500px] w-full">
          <iframe
            title="Cardiff Gate location"
            src="https://maps.google.com/maps?q=Cardiff+Gate+International+Business+Park,+CF23+8BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="absolute bottom-4 right-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cardiff+Gate+International+Business+Park,+CF23+8BA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-navy-800 font-semibold text-sm px-4 py-2.5 rounded-lg shadow-lg hover:bg-gold-500 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
        </div>
      </section>

      {/* Address bar */}
      <section className="bg-navy-800 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gold-400 font-semibold">Cardiff Gate International Business Park</span>
            <span className="text-gray-400 hidden sm:inline">·</span>
            <span className="text-gray-300 hidden sm:inline">M4, Junction 30, Cardiff CF23 8BA</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span>Sat nav:</span>
            <span className="font-mono font-bold text-white bg-navy-700 px-2 py-0.5 rounded">CF23 8BA</span>
          </div>
        </div>
      </section>

      {/* Journey times with transport tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left: tabs + times */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Journey Times</h2>

              {/* Tab bar */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      activeTab === tab.id
                        ? 'bg-navy-800 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Journey time cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.map((j) => (
                  <div
                    key={j.label}
                    className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{j.icon}</span>
                      <span className="text-gray-700 font-medium text-sm">{j.label}</span>
                    </div>
                    <span className="text-gold-600 font-bold text-sm whitespace-nowrap ml-2">{j.time}</span>
                  </div>
                ))}
              </div>

              {/* Transport detail text */}
              {activeTab !== 'all' && (
                <div className="mt-6 p-5 bg-navy-50 rounded-xl border border-navy-100">
                  <h3 className="font-bold text-navy-800 mb-2">{transportDetail[activeTab].heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{transportDetail[activeTab].body}</p>
                </div>
              )}
            </div>

            {/* Right: all transport details */}
            <div className="lg:w-80 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-5">Getting Here</h2>
                <div className="space-y-4">
                  {(Object.keys(transportDetail) as Exclude<Mode, 'all'>[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        activeTab === key
                          ? 'border-gold-400 bg-gold-50'
                          : 'border-gray-100 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-semibold text-navy-800 mb-1">
                        <span>{tabs.find(t => t.id === key)?.icon}</span>
                        {transportDetail[key].heading}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {transportDetail[key].body}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-navy-800 mb-3">Catchment</h3>
                <p className="text-sm text-gray-600">
                  Approximately <span className="font-bold text-navy-800">1.2 million people</span> live within a
                  45-minute drive of Cardiff Gate, making it one of the most accessible business locations in Wales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Arrange a visit</h2>
          <p className="text-navy-700 mb-6">
            Come and see Cardiff Gate in person. Our leasing team will be delighted to show you around the park and available spaces.
          </p>
          <Link href="/contact" className="inline-block bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
