import Link from 'next/link'

const company = [['About us', '/about'], ['Services', '/services'], ['Our work', '/projects'], ['Blog', '/blog']]
const solutions = [['Software development', '/services'], ['Business intelligence', '/services'], ['eAFYA EMR', '/projects'], ['Implementation support', '/services']]

export default function Footer() {
  return (
    <footer className="bg-[#071d2b] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
        <div className="grid gap-5 border-b border-white/10 pb-5 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="brand-mark !bg-emerald-500" aria-hidden="true"><span>A</span></span>
              <span className="text-base font-semibold tracking-tight">ArtSonGroup</span>
            </Link>
            <p className="mt-2 max-w-xs text-[11px] leading-4 text-white/55">Dependable software, business intelligence, and digital health systems for institutions across Uganda and the region.</p>
          </div>
          <div>
            <h2 className="footer-heading">Company</h2>
            <ul className="mt-2 space-y-1">{company.map(([label, href]) => <li key={label}><Link href={href} className="footer-link">{label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-heading">Solutions</h2>
            <ul className="mt-2 space-y-1">{solutions.map(([label, href]) => <li key={label}><Link href={href} className="footer-link">{label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-heading">Start a conversation</h2>
            <a href="mailto:info@artsongroup.com" className="mt-2 block text-xs font-semibold text-white hover:text-emerald-300">info@artsongroup.com</a>
            <a href="tel:+25679460958" className="mt-1 block text-xs text-white/60 hover:text-white">+256 794 609 58</a>
            <p className="mt-1 text-xs text-white/60">Kampala, Uganda</p>
            <Link href="/contact" className="mt-2 inline-flex items-center gap-1.5 border-b border-emerald-400 pb-0.5 text-[11px] font-bold text-emerald-300">Contact our team <i className="bi bi-arrow-up-right" /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 pt-3 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ArtSonGroup. All rights reserved.</p>
          <p>Software · Intelligence · Impact</p>
        </div>
      </div>
    </footer>
  )
}
