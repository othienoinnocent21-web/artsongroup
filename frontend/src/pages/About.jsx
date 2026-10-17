import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard'

const About = () => (
  <>
    <section className="bg-gradient-to-br from-navy to-navy-dark py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">About Us</span>
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">Engineering the future of enterprise technology</h1>
            <p className="mb-6 max-w-2xl text-lg text-slate-200">
              Arston Technologies is a global software and technology company delivering
              secure, scalable digital solutions for enterprises across finance, healthcare,
              and manufacturing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 no-underline hover:underline">Start a project</Link>
              <Link to="/services" className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-navy no-underline hover:underline">Explore services</Link>
            </div>
          </div>
          <div className="hidden text-center lg:col-span-4 lg:block">
            <i className="bi bi-shield-check text-[220px] text-accent opacity-20" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">Our Story</span>
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">A decade of trusted delivery</h2>
            <p className="mb-4 text-slate-600">
              Founded in 2014, Arston Technologies began as a boutique software house and
              has grown into a full-service technology partner. We work hand-in-hand with
              clients to design, build, and operate systems that move their business forward.
            </p>
            <p className="mb-6 text-slate-600">
              Our team of engineers, architects, and designers operates across 12 countries,
              combining deep domain expertise with modern engineering practices to deliver
              outcomes that last.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="200+" label="Projects delivered" icon="bi-check2-circle" />
              <StatCard value="12" label="Countries served" icon="bi-globe" />
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: 'bi-cpu', title: 'Modern engineering', desc: 'Cloud-native architectures, CI/CD, and automated testing.' },
              { icon: 'bi-shield-lock', title: 'Security first', desc: 'Compliance-driven development with continuous security scanning.' },
              { icon: 'bi-people', title: 'Expert teams', desc: 'Senior architects and engineers matched to your domain.' },
            ].map((value) => (
              <article key={value.icon} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-navy text-xl text-accent">
                  <i className={`bi ${value.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-navy">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
        {[
          { icon: 'bi-geo-alt', title: 'Headquarters', lines: ['Kampala, Uganda'] },
          { icon: 'bi-telephone', title: 'Call us', lines: ['+256 7946 0958', 'Mon-Fri 9:00 - 18:00 EAT'] },
          { icon: 'bi-envelope', title: 'Email us', lines: ['hello@arston.tech', 'Partnerships: partner@arston.tech'] },
        ].map((contact) => (
          <article key={contact.icon} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-accent">
              <i className={`bi ${contact.icon}`} aria-hidden="true"></i>
            </div>
            <h3 className="mb-2 font-bold text-navy">{contact.title}</h3>
            {contact.lines.map((line) => <p className="text-sm text-slate-600" key={line}>{line}</p>)}
          </article>
        ))}
      </div>
    </section>
  </>
)

export default About
