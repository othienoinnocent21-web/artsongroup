'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const socialLinks = [
  { label: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com/' },
  { label: 'X (Twitter)', icon: 'bi-twitter-x', href: 'https://x.com/' },
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Pinterest', icon: 'bi-pinterest', href: 'https://www.pinterest.com/' },
]

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => {
    setExpanded(false)
    setCompanyOpen(false)
  }
  const companyActive = pathname === '/about' || pathname.startsWith('/projects')

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-200/80 bg-slate-100 px-4 py-2 text-xs text-slate-600 sm:px-8">
        <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <i className="bi bi-geo-alt text-lime-600" aria-hidden="true" />
              Kampala, Uganda
            </span>
            <a
              href="mailto:info@artsongroup.com"
              className="flex items-center gap-2 transition hover:text-lime-600"
            >
              <i className="bi bi-envelope text-lime-600" aria-hidden="true" />
              info@artsongroup.com
            </a>
            <span className="flex items-center gap-2">
              <i className="bi bi-clock text-lime-600" aria-hidden="true" />
              9.00 am – 5.30 pm
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-700">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-lime-600"
                aria-label={social.label}
              >
                <i className={`bi ${social.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className="border-b border-slate-200/60 bg-white shadow-sm"
      >
        <div className="flex min-h-28 w-full flex-wrap items-center justify-between gap-3 px-4 sm:px-8 lg:px-12">
          <Link
            className="flex items-center no-underline"
            href="/"
            onClick={closeMenu}
            aria-label="ArtSonGroup home"
          >
            <span className="flex items-center justify-center rounded-md bg-lime-500 p-1.5 text-white">
              <i className="bi bi-cpu text-xl" aria-hidden="true" />
            </span>
            <span className="ml-2 text-xl font-extrabold tracking-tight text-slate-900">
              ArtSonGroup
            </span>
          </Link>

          <div className="flex items-center gap-3 lg:order-2">
            <button
              className="hidden text-lg text-slate-700 transition hover:text-lime-600 lg:inline-flex"
              type="button"
              aria-label="Search"
            >
              <i className="bi bi-search" aria-hidden="true" />
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-50 hover:text-lime-600 lg:hidden"
              type="button"
              aria-expanded={expanded}
              aria-controls="navbarMain"
              aria-label={expanded ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setExpanded((current) => !current)}
            >
              <i className={`bi ${expanded ? 'bi-x-lg' : 'bi-list'} text-xl`} aria-hidden="true" />
            </button>
          </div>

          <div
            id="navbarMain"
            className={`${expanded ? 'flex' : 'hidden'} order-3 w-full flex-col border-t border-slate-100 pb-3 lg:order-1 lg:ml-auto lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:pb-0 xl:gap-6`}
          >
            {navLinks.slice(0, 1).map((link) => {
              const isActive = pathname === link.path

              return (
                <Link
                  key={link.name}
                  className={`relative py-3 text-sm transition-colors lg:py-1 ${
                    isActive
                      ? 'border-b-2 border-lime-500 pb-1 font-bold text-lime-600'
                      : 'font-semibold text-slate-800 hover:text-lime-600'
                  }`}
                  href={link.path}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="relative">
              <button
                type="button"
                className={`flex w-full items-center gap-2 py-3 text-left text-sm transition-colors lg:w-auto lg:py-1 ${
                  companyActive
                    ? 'font-bold text-lime-600'
                    : 'font-semibold text-slate-800 hover:text-lime-600'
                }`}
                aria-expanded={companyOpen}
                aria-haspopup="true"
                onClick={() => setCompanyOpen((current) => !current)}
              >
                Company
                <i className="bi bi-chevron-down text-[10px]" aria-hidden="true" />
              </button>
              {companyOpen && (
                <div className="z-30 mt-1 flex flex-col rounded-md border border-slate-200 bg-white py-1 shadow-lg lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:min-w-44">
                  {[
                    { name: 'About Us', path: '/about' },
                    { name: 'Projects', path: '/projects' },
                  ].map((item) => {
                    const isActive =
                      pathname === item.path || pathname.startsWith(`${item.path}/`)

                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={closeMenu}
                        aria-current={isActive ? 'page' : undefined}
                        className={`px-4 py-2 text-sm transition-colors hover:bg-slate-50 hover:text-lime-600 ${
                          isActive ? 'font-bold text-lime-600' : 'font-medium text-slate-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path !== '/' && pathname.startsWith(`${link.path}/`))

              return (
                <Link
                  key={link.name}
                  className={`relative py-3 text-sm transition-colors lg:py-1 ${
                    isActive
                      ? 'border-b-2 border-lime-500 pb-1 font-bold text-lime-600'
                      : 'font-semibold text-slate-800 hover:text-lime-600'
                  }`}
                  href={link.path}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
