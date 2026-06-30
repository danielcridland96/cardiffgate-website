'use client'

import { useState } from 'react'

const agents = [
  {
    name: 'Rhydian Morris',
    title: 'Director, JLL',
    phone: '+44 7792 273120',
    email: 'rhydian.morris@eu.jll.com',
  },
  {
    name: 'Justin Millett',
    title: 'Director, JLL',
    phone: '+44 7816 813434',
    email: 'justin.millett@jll.com',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', interest: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production, wire up to an API route or form service (e.g. Formspree, Resend)
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">Talk to us</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            For all leasing and space enquiries, get in touch with our letting agents at JLL. We&apos;d love to help you
            find your next home at Cardiff Gate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-navy-800 mb-2">Thank you!</h2>
                  <p className="text-gray-500">Your enquiry has been received. A member of the JLL team will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-navy-800 mb-6">Make an Enquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                          placeholder="Acme Ltd"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                          placeholder="+44 7700 900000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in</label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      >
                        <option value="">Select an option</option>
                        <option>Ashtree Court</option>
                        <option>Copse Walk</option>
                        <option>Design &amp; Build Opportunity</option>
                        <option>General enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none"
                        placeholder="Tell us about your requirements — size, timing, any specific needs…"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Send Enquiry
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Your details will be passed to JLL, the appointed leasing agents for Cardiff Gate.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact details */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                <h2 className="text-xl font-bold text-navy-800">Leasing Agents</h2>
                <img src="/jll-logo.png" alt="JLL" className="h-6 w-auto object-contain" />
              </div>
                <div className="space-y-5">
                  {agents.map((a) => (
                    <div key={a.name} className="bg-white rounded-xl p-5 shadow-sm flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {a.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-navy-800">{a.name}</div>
                        <div className="text-sm text-gray-500 mb-2">{a.title}</div>
                        <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="text-sm text-gold-600 hover:text-gold-500 block">
                          {a.phone}
                        </a>
                        <a href={`mailto:${a.email}`} className="text-sm text-gold-600 hover:text-gold-500 block break-all">
                          {a.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-4">Park Address</h2>
                <div className="bg-white rounded-xl p-5 shadow-sm text-gray-700">
                  <p className="font-semibold text-navy-800">Cardiff Gate International Business Park</p>
                  <p>M4, Junction 30</p>
                  <p>Cardiff</p>
                  <p>CF23 8BA</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="tel:02920545300" className="flex items-center gap-2 text-gold-600 hover:text-gold-500 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      029 2054 5300
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
