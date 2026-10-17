import Link from 'next/link'

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'Web Development', to: '/services' },
  { label: 'Cloud Solutions', to: '/services' },
  { label: 'AI & Data', to: '/services' },
  { label: 'Cybersecurity', to: '/services' },
]

const socials = [
  { icon: 'bi-linkedin', href: '#' },
  { icon: 'bi-twitter-x', href: '#' },
  { icon: 'bi-facebook', href: '#' },
  { icon: 'bi-instagram', href: '#' },
]

const Footer = () => (
  <footer className="bg-gradient-to-b from-navy-dark to-slate-950 py-12 text-white">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="mb-3 flex items-center gap-2 no-underline hover:underline">
            <i className="bi bi-cpu text-2xl text-accent"></i>
            <span className="text-xl font-bold">ArtSonGroup</span>
          </Link>
          <p className="mb-0 max-w-sm text-slate-400">
            ArtSonGroup delivers enterprise-grade software, cloud, and digital transformation
            solutions that power modern businesses worldwide.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Company</h2>
          <ul className="flex flex-col gap-2">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link
                  className="text-slate-400 no-underline transition hover:text-white hover:underline"
                  href={l.to}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service links */}
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Services</h2>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  className="text-slate-400 no-underline transition hover:text-white hover:underline"
                  href={l.to}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & socials */}
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Contact</h2>
          <ul className="mb-6 flex flex-col gap-2">
            <li className="flex items-start gap-2">
              <i className="bi bi-envelope mt-1 text-accent"></i>
              <span className="text-slate-400">hello@arston.tech</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-telephone mt-1 text-accent"></i>
              <span className="text-slate-400">+256 7946 0958</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-geo-alt mt-1 text-accent"></i>
              <span className="text-slate-400">Kampala, Uganda</span>
            </li>
          </ul>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Follow</h2>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition hover:-translate-y-0.5 hover:bg-blue-500/25 hover:text-white no-underline hover:underline"
                aria-label={s.icon}
              >
                <i className={`bi ${s.icon} fs-5`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-4 sm:flex-row">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white no-underline hover:underline"
        >
          <i className="bi bi-speedometer2" aria-hidden="true"></i>
          Admin Dashboard
        </Link>
        <small className="text-center text-sm text-slate-400 sm:text-right">
          &copy; 2026 ArtSonGroup. All rights reserved.
        </small>
      </div>
    </div>
  </footer>
)

export default Footer
