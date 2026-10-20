'use client'

import { useState } from 'react'

const initialForm = { name: '', organization: '', email: '', phone: '', interest: '', message: '' }
const inputClass = 'h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100'

export default function ContactClient() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }))

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.interest) nextErrors.interest = 'Please choose an inquiry type.'
    if (!form.message.trim()) nextErrors.message = 'Please add a short message.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 700))
    setStatus('success')
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-[#eef3f0] py-7 sm:py-9">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10"><p className="page-kicker">Contact ArtSonGroup</p><div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><h1 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0a2438]">Let’s solve something important.</h1><p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base lg:justify-self-end">Tell us about your software, business intelligence, digital health, partnership, or support requirement.</p></div></div>
      </section>

      <section className="bg-white py-9 sm:py-11">
        <div className="mx-auto grid max-w-[1240px] gap-7 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <aside>
            <p className="section-kicker">Direct contact</p>
            <h2 className="text-xl font-semibold text-[#0a2438]">Start with the right conversation.</h2>
            <p className="mt-2 text-xs leading-5 text-slate-600">Share the context, the people involved, and the result you are trying to create. Our team will route your inquiry appropriately.</p>
            <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
              {[['bi-envelope', 'Email', 'info@artsongroup.com'], ['bi-telephone', 'Office', '+256 393 239 101'], ['bi-geo-alt', 'Location', 'National Innovation Hub, Kampala']].map(([icon, label, value]) => <div key={label} className="flex gap-3 py-3"><i className={`bi ${icon} mt-0.5 text-emerald-700`} /><div><dt className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</dt><dd className="mt-0.5 text-xs font-semibold text-[#0a2438]">{value}</dd></div></div>)}
            </dl>
            <div className="mt-5 rounded-lg bg-[#092638] p-4 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">Support</p><p className="mt-1 text-xs leading-5 text-white/65">Existing eAFYA and implementation partners can use this same form and select Technical support.</p></div>
          </aside>

          <div className="rounded-xl border border-slate-200 bg-[#f8f9f7] p-5 sm:p-6">
            {status === 'success' ? <div className="flex min-h-96 flex-col items-center justify-center text-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-700"><i className="bi bi-check2" /></span><h2 className="mt-5 text-2xl font-semibold text-[#0a2438]">Thank you. Your inquiry is ready for review.</h2><p className="mt-2 max-w-md text-sm leading-6 text-slate-600">Our team will use the details you provided to follow up through your email address.</p><button type="button" onClick={() => { setForm(initialForm); setErrors({}); setStatus('idle') }} className="mt-6 text-sm font-bold text-emerald-700">Send another inquiry</button></div> : <form onSubmit={submit} noValidate><div className="grid gap-5 sm:grid-cols-2">{[['name', 'Full name', 'Jane Doe', 'text'], ['organization', 'Organization', 'Organization name', 'text'], ['email', 'Work email', 'name@organization.org', 'email'], ['phone', 'Phone (optional)', '+256 ...', 'tel']].map(([field, label, placeholder, type]) => <label key={field} className="text-xs font-bold text-[#0a2438]">{label}<input className={`${inputClass} mt-2 ${errors[field] ? '!border-red-500' : ''}`} type={type} value={form[field]} onChange={(event) => update(field, event.target.value)} placeholder={placeholder} />{errors[field] && <span className="mt-1 block text-xs font-medium text-red-600">{errors[field]}</span>}</label>)}</div><label className="mt-5 block text-xs font-bold text-[#0a2438]">What can we help with?<select className={`${inputClass} mt-2 ${errors.interest ? '!border-red-500' : ''}`} value={form.interest} onChange={(event) => update('interest', event.target.value)}><option value="">Select an inquiry type</option><option>Software development</option><option>Business intelligence</option><option>eAFYA EMR</option><option>Partnership</option><option>Technical support</option><option>Other</option></select>{errors.interest && <span className="mt-1 block text-xs font-medium text-red-600">{errors.interest}</span>}</label><label className="mt-5 block text-xs font-bold text-[#0a2438]">Tell us about the requirement<textarea className={`${inputClass} mt-2 min-h-28 resize-y py-3 ${errors.message ? '!border-red-500' : ''}`} value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="A short description of your goals, users, and timeline" />{errors.message && <span className="mt-1 block text-xs font-medium text-red-600">{errors.message}</span>}</label><div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-xs leading-5 text-slate-500">By submitting, you agree that ArtSonGroup may contact you about this inquiry.</p><button type="submit" disabled={status === 'submitting'} className="button-primary shrink-0 disabled:cursor-wait disabled:opacity-60">{status === 'submitting' ? 'Sending…' : 'Send inquiry'} <i className="bi bi-arrow-right" /></button></div></form>}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f4f6f4] py-7"><div className="mx-auto grid max-w-[1240px] gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:px-10">{[['Projects', 'Plan a new product, platform, or integration.'], ['Partnerships', 'Explore delivery, technology, or development collaboration.'], ['Support', 'Get help with an existing system or implementation.']].map(([title, text]) => <div key={title} className="border-l-2 border-emerald-600 pl-3"><h2 className="text-sm font-semibold text-[#0a2438]">{title}</h2><p className="mt-0.5 text-xs text-slate-600">{text}</p></div>)}</div></section>
    </>
  )
}
