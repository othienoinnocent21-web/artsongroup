'use client'

import { useState } from 'react'
import Link from 'next/link'

const socials = [
  { label: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com/' },
  { label: 'X', icon: 'bi-twitter-x', href: 'https://x.com/' },
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/' },
]

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'

const labelClass = 'mb-2 block text-sm font-semibold text-navy'

export default function ContactClient() {
  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    partnershipType: '',
    message: '',
  })
  const [partnerErrors, setPartnerErrors] = useState({})
  const [partnerSubmitting, setPartnerSubmitting] = useState(false)
  const [partnerStatus, setPartnerStatus] = useState(null)

  const [supportForm, setSupportForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    supportType: '',
    description: '',
  })
  const [supportErrors, setSupportErrors] = useState({})
  const [supportSubmitting, setSupportSubmitting] = useState(false)
  const [supportStatus, setSupportStatus] = useState(null)

  const validatePartner = () => {
    const errors = {}
    if (!partnerForm.organization.trim()) errors.organization = 'Organization name is required.'
    if (!partnerForm.contactPerson.trim()) errors.contactPerson = 'Contact person is required.'
    if (!partnerForm.email.trim()) errors.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(partnerForm.email))
      errors.email = 'Enter a valid email address.'
    if (!partnerForm.partnershipType) errors.partnershipType = 'Please select a partnership type.'
    if (!partnerForm.message.trim()) errors.message = 'Please tell us about your interest.'
    setPartnerErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateSupport = () => {
    const errors = {}
    if (!supportForm.name.trim()) errors.name = 'Your name is required.'
    if (!supportForm.organization.trim()) errors.organization = 'Organization is required.'
    if (!supportForm.email.trim()) errors.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportForm.email))
      errors.email = 'Enter a valid email address.'
    if (!supportForm.phone.trim()) errors.phone = 'Phone number is required.'
    if (!supportForm.supportType) errors.supportType = 'Please select a support type.'
    if (!supportForm.description.trim()) errors.description = 'Please provide a detailed description.'
    setSupportErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (setter, field, value) =>
    setter((prev) => ({ ...prev, [field]: value }))

  const handlePartnerSubmit = async (e) => {
    e.preventDefault()
    if (!validatePartner()) return
    setPartnerSubmitting(true)
    setPartnerStatus(null)
    await new Promise((r) => setTimeout(r, 1000))
    setPartnerSubmitting(false)
    setPartnerStatus('success')
  }

  const handleSupportSubmit = async (e) => {
    e.preventDefault()
    if (!validateSupport()) return
    setSupportSubmitting(true)
    setSupportStatus(null)
    await new Promise((r) => setTimeout(r, 1000))
    setSupportSubmitting(false)
    setSupportStatus('success')
  }

  const sectionHeader = (title, subtitle) => (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">{title}</h2>
      <p className="text-lg text-slate-600">{subtitle}</p>
    </div>
  )

  const errorMessage = (message, id) =>
    message && (
      <p id={id} className="mt-1 text-sm text-red-700" role="alert">
        {message}
      </p>
    )

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="bg-[#1b365d] py-8 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4 text-sm">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                className="flex items-center gap-2 text-white/75 no-underline hover:text-white hover:underline"
                href="mailto:info@artsongroup.com"
              >
                <i className="bi bi-envelope" aria-hidden="true"></i>
                info@artsongroup.com
              </a>
              <a
                className="flex items-center gap-2 text-white/75 no-underline hover:text-white hover:underline"
                href="tel:+256393239101"
              >
                <i className="bi bi-telephone" aria-hidden="true"></i>
                +256 393 239 101
              </a>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-[#1b365d] no-underline hover:underline"
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-blue-200">
              ArtSonGroup
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s build stronger digital systems together
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/75">
              Partner with ArtSonGroup to transform digital information systems and create lasting
              impact across communities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#partner"
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 no-underline hover:underline"
              >
                Become a Partner
              </a>
              <a
                href="#support"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 no-underline hover:underline"
              >
                Request Support
              </a>
              <a
                href="#visit"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#1b365d] no-underline hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner form */}
      <section id="partner" className="scroll-mt-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeader(
            'Become a Partner',
            'Join our network of organizations committed to strengthening digital systems across Africa.'
          )}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="mb-5 text-2xl font-bold text-navy">Partnership Opportunities</h3>
              <ul className="space-y-4">
                {[
                  ['Implementation Partners', 'Support implementation and scale-up of digital solutions.'],
                  ['Academic Partners', 'Collaborate on research, education, and capacity building.'],
                  ['Development Partners', 'Advance sustainable programs and measurable community impact.'],
                  ['Technology Partners', 'Integrate technologies and expertise to strengthen digital systems.'],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <i className="bi bi-check-circle-fill mt-1 text-blue-600" aria-hidden="true"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
              {partnerStatus === 'success' ? (
                <div className="py-6 text-center">
                  <i className="bi bi-check-circle-fill text-5xl text-green-600" aria-hidden="true"></i>
                  <h3 className="mb-3 mt-4 text-2xl font-bold text-navy">Inquiry received</h3>
                  <p className="mb-6 text-slate-600">
                    Thank you! Our team will review it and get back to you shortly.
                  </p>
                  <button
                    className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                    onClick={() => {
                      setPartnerForm({
                        organization: '',
                        contactPerson: '',
                        email: '',
                        partnershipType: '',
                        message: '',
                      })
                      setPartnerErrors({})
                      setPartnerStatus(null)
                    }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass} htmlFor="partner-organization">
                      Organization Name
                    </label>
                    <input
                      id="partner-organization"
                      className={`${inputClass} ${partnerErrors.organization ? 'border-red-600' : ''}`}
                      type="text"
                      value={partnerForm.organization}
                      onChange={(e) => handleChange(setPartnerForm, 'organization', e.target.value)}
                      placeholder="Your organization's name"
                    />
                    {errorMessage(partnerErrors.organization, 'partner-organization-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="partner-contact">
                      Contact Person
                    </label>
                    <input
                      id="partner-contact"
                      className={`${inputClass} ${partnerErrors.contactPerson ? 'border-red-600' : ''}`}
                      type="text"
                      value={partnerForm.contactPerson}
                      onChange={(e) => handleChange(setPartnerForm, 'contactPerson', e.target.value)}
                      placeholder="Full name"
                    />
                    {errorMessage(partnerErrors.contactPerson, 'partner-contact-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="partner-email">
                      Email Address
                    </label>
                    <input
                      id="partner-email"
                      className={`${inputClass} ${partnerErrors.email ? 'border-red-600' : ''}`}
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => handleChange(setPartnerForm, 'email', e.target.value)}
                      placeholder="name@organization.org"
                    />
                    {errorMessage(partnerErrors.email, 'partner-email-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="partner-type">
                      Partnership Type
                    </label>
                    <select
                      id="partner-type"
                      className={`${inputClass} ${partnerErrors.partnershipType ? 'border-red-600' : ''}`}
                      value={partnerForm.partnershipType}
                      onChange={(e) => handleChange(setPartnerForm, 'partnershipType', e.target.value)}
                    >
                      <option value="">Choose a partnership type</option>
                      <option value="implementation">Implementation Partner</option>
                      <option value="academic">Academic Partner</option>
                      <option value="development">Development Partner</option>
                      <option value="technology">Technology Partner</option>
                      <option value="other">Other</option>
                    </select>
                    {errorMessage(partnerErrors.partnershipType, 'partner-type-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="partner-message">
                      Message
                    </label>
                    <textarea
                      id="partner-message"
                      className={`${inputClass} ${partnerErrors.message ? 'border-red-600' : ''}`}
                      rows="4"
                      value={partnerForm.message}
                      onChange={(e) => handleChange(setPartnerForm, 'message', e.target.value)}
                      placeholder="Tell us about your interest in partnering with ArtSonGroup"
                    />
                    {errorMessage(partnerErrors.message, 'partner-message-error')}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60"
                    disabled={partnerSubmitting}
                  >
                    {partnerSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support form */}
      <section id="support" className="scroll-mt-8 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeader(
            'Request Support',
            'Get expert assistance with software implementation, digital health systems, and IT solutions.'
          )}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: 'bi-cloud-arrow-up',
                  title: 'Software Implementation',
                  text: 'End-to-end deployment, configuration, and customization of software and digital systems.',
                },
                {
                  icon: 'bi-person-badge',
                  title: 'Training',
                  text: 'Hands-on training for teams to operate, maintain, and scale digital solutions.',
                },
                {
                  icon: 'bi-pie-chart',
                  title: 'Data Analytics',
                  text: 'Turn routine data into actionable insights with dashboards, reports, and visual analytics.',
                },
                {
                  icon: 'bi-headset',
                  title: 'Technical Support',
                  text: 'Ongoing troubleshooting, maintenance, and expert assistance for your digital systems.',
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                    <i className={`bi ${card.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.text}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
              {supportStatus === 'success' ? (
                <div className="py-6 text-center">
                  <i className="bi bi-check-circle-fill text-5xl text-green-600" aria-hidden="true"></i>
                  <h3 className="mb-3 mt-4 text-2xl font-bold text-navy">Request received</h3>
                  <p className="mb-6 text-slate-600">
                    Our team will reach out within one business day.
                  </p>
                  <button
                    className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                    onClick={() => {
                      setSupportForm({
                        name: '',
                        organization: '',
                        email: '',
                        phone: '',
                        supportType: '',
                        description: '',
                      })
                      setSupportErrors({})
                      setSupportStatus(null)
                    }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass} htmlFor="support-name">Name</label>
                    <input
                      id="support-name"
                      className={`${inputClass} ${supportErrors.name ? 'border-red-600' : ''}`}
                      type="text"
                      value={supportForm.name}
                      onChange={(e) => handleChange(setSupportForm, 'name', e.target.value)}
                      placeholder="Jane Doe"
                    />
                    {errorMessage(supportErrors.name, 'support-name-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="support-organization">Organization</label>
                    <input
                      id="support-organization"
                      className={`${inputClass} ${supportErrors.organization ? 'border-red-600' : ''}`}
                      type="text"
                      value={supportForm.organization}
                      onChange={(e) => handleChange(setSupportForm, 'organization', e.target.value)}
                      placeholder="Organization name"
                    />
                    {errorMessage(supportErrors.organization, 'support-organization-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="support-email">Email</label>
                    <input
                      id="support-email"
                      className={`${inputClass} ${supportErrors.email ? 'border-red-600' : ''}`}
                      type="email"
                      value={supportForm.email}
                      onChange={(e) => handleChange(setSupportForm, 'email', e.target.value)}
                      placeholder="name@organization.org"
                    />
                    {errorMessage(supportErrors.email, 'support-email-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="support-phone">Phone</label>
                    <input
                      id="support-phone"
                      className={`${inputClass} ${supportErrors.phone ? 'border-red-600' : ''}`}
                      type="tel"
                      value={supportForm.phone}
                      onChange={(e) => handleChange(setSupportForm, 'phone', e.target.value)}
                      placeholder="+256 7xx xxx xxx"
                    />
                    {errorMessage(supportErrors.phone, 'support-phone-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="support-type">Support Type</label>
                    <select
                      id="support-type"
                      className={`${inputClass} ${supportErrors.supportType ? 'border-red-600' : ''}`}
                      value={supportForm.supportType}
                      onChange={(e) => handleChange(setSupportForm, 'supportType', e.target.value)}
                    >
                      <option value="">Choose a support type</option>
                      <option value="implementation">Software Implementation</option>
                      <option value="training">Training</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errorMessage(supportErrors.supportType, 'support-type-error')}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="support-message">Message</label>
                    <textarea
                      id="support-message"
                      className={`${inputClass} ${supportErrors.description ? 'border-red-600' : ''}`}
                      rows="4"
                      value={supportForm.description}
                      onChange={(e) => handleChange(setSupportForm, 'description', e.target.value)}
                      placeholder="Describe the support you need..."
                    />
                    {errorMessage(supportErrors.description, 'support-message-error')}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60"
                    disabled={supportSubmitting}
                  >
                    {supportSubmitting ? 'Submitting...' : 'Submit Support Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visit / Map */}
      <section id="visit" className="scroll-mt-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeader(
            'Visit Us',
            'Find us at our office in Kampala, Uganda or reach out through any of our contact channels.'
          )}
          <div className="aspect-video max-h-[520px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our office in Kampala, Uganda"
              src="https://www.google.com/maps?q=National%20Innovation%20Hub%2C%20Ntinda-Kigobe%20Rd%2C%20Kampala%2C%20Uganda&output=embed"
              allowFullScreen
            />
          </div>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="mb-1 flex items-center justify-center gap-2 font-semibold text-navy">
                <i className="bi bi-geo-alt text-blue-700" aria-hidden="true"></i>
                National Innovation Hub
              </div>
              <p className="text-sm text-slate-600">Ntinda - Kigobe Rd, Kampala, Uganda</p>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-center gap-2 font-semibold text-navy">
                <i className="bi bi-envelope text-blue-700" aria-hidden="true"></i>
                info@artsongroup.com
              </div>
              <p className="text-sm text-slate-600">Partnership &amp; support inquiries</p>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-center gap-2 font-semibold text-navy">
                <i className="bi bi-telephone text-blue-700" aria-hidden="true"></i>
                +256 393 239 101
              </div>
              <p className="text-sm text-slate-600">Office line</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
