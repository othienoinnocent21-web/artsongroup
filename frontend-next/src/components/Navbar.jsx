'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'eAFYA EMR', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex min-h-9 max-w-[1240px] items-center justify-between gap-4 px-5 text-[10px] text-slate-500 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <span className="hidden items-center gap-1.5 sm:inline-flex"><i className="bi bi-geo-alt-fill text-emerald-600" aria-hidden="true" />Kampala, Uganda</span>
            <a href="mailto:info@artsongroup.com" className="inline-flex items-center gap-1.5 hover:text-emerald-700"><i className="bi bi-envelope text-emerald-600" aria-hidden="true" />info@artsongroup.com</a>
            <span className="hidden items-center gap-1.5 md:inline-flex"><i className="bi bi-alarm text-emerald-600" aria-hidden="true" />9.00 am - 5.30 pm</span>
          </div>
          <div className="hidden shrink-0 items-center gap-3 text-xs text-slate-400 sm:flex" aria-hidden="true">
            <i className="bi bi-facebook" />
            <i className="bi bi-twitter" />
            <i className="bi bi-linkedin" />
            <i className="bi bi-pinterest" />
          </div>
        </div>
      </div>
      <nav className="mx-auto flex min-h-14 max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="ArtSonGroup home">
          <span className="brand-mark" aria-hidden="true"><span>A</span></span>
          <span><strong className="block text-[1.08rem] leading-none tracking-[-0.025em] text-[#0a2438]">ArtSonGroup</strong><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-700">Technology for impact</span></span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => {
            const active = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path)
            return <Link key={link.path} href={link.path} aria-current={active ? 'page' : undefined} className={`nav-link ${active ? 'nav-link-active' : ''}`}>{link.name}</Link>
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-md bg-[#0a2438] px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 sm:inline-flex">Start a project</Link>
          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-xl text-[#0a2438] lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}><i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} /></button>
        </div>
      </nav>
      {open && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {links.map((link) => <Link key={link.path} href={link.path} className="border-b border-slate-100 py-3.5 font-semibold text-[#0a2438]">{link.name}</Link>)}
            <Link href="/contact" className="mt-5 flex min-h-12 items-center justify-center rounded-lg bg-emerald-700 px-5 font-bold text-white">Start a project</Link>
          </div>
        </div>
      )}
    </header>
  )
}
