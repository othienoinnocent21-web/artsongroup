'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const socialLinks = [
  { label: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com/' },
  { label: 'X', icon: 'bi-twitter-x', href: 'https://x.com/' },
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Pinterest', icon: 'bi-pinterest', href: 'https://www.pinterest.com/' },
]

const navItems = [
  { to: '/projects', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const pathname = usePathname()

  const close = () => {
    setExpanded(false)
    setCompanyOpen(false)
  }

  return (
    <header className="relative z-20">
      {/* Top utility bar */}
      <div className="border-b border-slate-200 bg-slate-100 py-2 text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2">
                <i className="bi bi-geo-alt text-green-600" aria-hidden="true"></i>
                Kampala, Uganda
              </span>
              <a
                className="flex items-center gap-2 no-underline hover:underline"
                href="mailto:info@artsontechnologies.com"
              >
                <i className="bi bi-envelope text-green-600" aria-hidden="true"></i>
                info@artsontechnologies.com
              </a>
              <span className="flex items-center gap-2">
                <i className="bi bi-clock text-green-600" aria-hidden="true"></i>
                9.00 am – 5.30 pm
              </span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-black py-4 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            className="flex items-center gap-2 text-xl font-bold no-underline hover:underline"
            href="/"
            onClick={close}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-500">
              <i className="bi bi-cpu text-white" aria-hidden="true"></i>
            </span>
            <span className="font-bold text-xl text-white">ArtSonGroup</span>
          </Link>

          <button
            className="rounded-md border border-white/40 px-3 py-2 text-white transition hover:bg-white/10 lg:hidden"
            type="button"
            aria-expanded={expanded}
            aria-controls="navbarMain"
            aria-label="Toggle navigation"
            onClick={() => setExpanded((c) => !c)}
          >
            <span className="bi bi-list text-xl" aria-hidden="true"></span>
          </button>

          <div
            id="navbarMain"
            className={`${expanded ? 'flex' : 'hidden'} w-full flex-col gap-2 lg:flex lg:w-auto lg:flex-row lg:items-center`}
          >
            <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
              {/* Home */}
              <li>
                <Link
                  className={`rounded px-3 py-2 transition no-underline hover:underline ${
                    pathname === '/' ? 'text-lime-400' : 'text-white hover:text-lime-400'
                  }`}
                  href="/"
                  onClick={close}
                >
                  Home
                </Link>
              </li>

              {/* Company dropdown */}
              <li className="relative">
                <button
                  className={`rounded px-3 py-2 transition ${
                    pathname === '/about' ? 'text-lime-400' : 'text-white hover:text-lime-400'
                  }`}
                  type="button"
                  aria-expanded={companyOpen}
                  onClick={() => setCompanyOpen((c) => !c)}
                >
                  Company
                </button>
                <ul
                  className={`${
                    companyOpen ? 'block' : 'hidden'
                  } absolute left-0 top-full z-30 min-w-44 rounded-md border border-slate-200 bg-white py-2 text-slate-800 shadow-lg`}
                >
                  <li>
                    <Link
                      className="block px-4 py-2 no-underline hover:bg-slate-100 hover:underline"
                      href="/about"
                      onClick={close}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 no-underline hover:bg-slate-100 hover:underline"
                      href="/contact"
                      onClick={close}
                    >
                      Get in touch
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Dynamic nav items */}
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={`block rounded px-3 py-2 transition no-underline hover:underline ${
                      pathname === item.to ? 'text-lime-400' : 'text-white hover:text-lime-400'
                    }`}
                    href={item.to}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="lg:ml-2">
                <button
                  className="rounded p-2 text-white transition hover:text-lime-400"
                  type="button"
                  aria-label="Search"
                >
                  <i className="bi bi-search" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
