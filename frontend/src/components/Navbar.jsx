import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const socialLinks = [
  { label: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com/' },
  { label: 'X', icon: 'bi-twitter-x', href: 'https://x.com/' },
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Pinterest', icon: 'bi-pinterest', href: 'https://www.pinterest.com/' },
]

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const location = useLocation()

  const close = () => {
    setExpanded(false)
    setCompanyOpen(false)
  }

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/opportunities', label: 'Opportunities' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="relative z-20">
      <div className="border-b border-slate-200 bg-slate-100 py-2 text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2">
                <i className="bi bi-geo-alt text-green-600" aria-hidden="true"></i>
                 Kampala, Uganda
              </span>
              <a className="flex items-center gap-2 no-underline hover:underline" href="mailto:info@artsontechnologies.com">
                <i className="bi bi-envelope text-green-600" aria-hidden="true"></i>
                info@artsontechnologies.com
              </a>
              <span className="flex items-center gap-2">
                <i className="bi bi-clock text-green-600" aria-hidden="true"></i>
                9.00 am - 5.30 pm
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

      <nav className="bg-black py-4 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-2 text-xl font-bold no-underline hover:underline" to="/" onClick={close}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-500">
              <i className="bi bi-cpu text-white" aria-hidden="true"></i>
            </span>
            <span>Artstson Technologies</span>
          </Link>

          <button
            className="rounded-md border border-white/40 px-3 py-2 text-white transition hover:bg-white/10 lg:hidden"
            type="button"
            aria-expanded={expanded}
            aria-controls="navbarMain"
            aria-label="Toggle navigation"
            onClick={() => setExpanded((current) => !current)}
          >
            <span className="bi bi-list text-xl" aria-hidden="true"></span>
          </button>

          <div id="navbarMain" className={`${expanded ? 'flex' : 'hidden'} w-full flex-col gap-2 lg:flex lg:w-auto lg:flex-row lg:items-center`}>
            <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
              <li>
                <Link className={`rounded px-3 py-2 transition no-underline hover:underline ${location.pathname === '/' ? 'text-lime-400' : 'text-white hover:text-lime-400'}`} to="/" onClick={close}>
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className={`rounded px-3 py-2 transition ${location.pathname === '/about' ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
                  type="button"
                  aria-expanded={companyOpen}
                  onClick={() => setCompanyOpen((current) => !current)}
                >
                  Company
                </button>
                <ul className={`${companyOpen ? 'block' : 'hidden'} absolute left-0 top-full z-30 min-w-44 rounded-md border border-slate-200 bg-white py-2 text-slate-800 shadow-lg`}>
                  <li><Link className="block px-4 py-2 no-underline hover:bg-slate-100 hover:underline" to="/about" onClick={close}>About us</Link></li>
                  <li><Link className="block px-4 py-2 no-underline hover:bg-slate-100 hover:underline" to="/contact" onClick={close}>Get in touch</Link></li>
                </ul>
              </li>
              {navItems.slice(1).map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      className={`block rounded px-3 py-2 transition no-underline hover:underline ${location.pathname === item.to ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
                      to={item.to}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a className="block rounded px-3 py-2 text-white no-underline transition hover:text-lime-400 hover:underline" href={item.href} onClick={close}>{item.label}</a>
                  )}
                </li>
              ))}
              <li className="lg:ml-2">
                <button className="rounded p-2 text-white transition hover:text-lime-400" type="button" aria-label="Search">
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
