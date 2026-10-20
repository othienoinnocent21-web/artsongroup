import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    number: '01',
    icon: 'bi-code-slash',
    title: 'Software Development',
    description:
      'Purpose-built web, mobile, and enterprise platforms engineered around your operations, users, and long-term growth.',
    capabilities: ['Enterprise applications', 'Systems integration', 'Product engineering'],
  },
  {
    number: '02',
    icon: 'bi-bar-chart-line',
    title: 'Business Intelligence',
    description:
      'Data platforms and executive dashboards that turn fragmented operational information into decisions teams can act on.',
    capabilities: ['Analytics dashboards', 'Data integration', 'Reporting automation'],
  },
  {
    number: '03',
    icon: 'bi-heart-pulse',
    title: 'Digital Health Solutions',
    description:
      'Secure health information systems designed for real clinical workflows, institutional ownership, and continuity of care.',
    capabilities: ['Electronic medical records', 'Health analytics', 'Implementation support'],
  },
]

const deliverySteps = [
  ['Discover', 'We map the operating environment, user needs, data flows, and the outcome the system must enable.'],
  ['Design', 'We shape the architecture, experience, and delivery roadmap with stakeholders—not around them.'],
  ['Deliver', 'We build, integrate, test, and deploy dependable technology with clear governance throughout.'],
  ['Enable', 'We transfer knowledge, support adoption, and strengthen the teams that will sustain the solution.'],
]

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f7f8f6]">
      <section className="relative isolate border-b border-slate-200 bg-[#f7f8f6]">
        <div className="corporate-grid absolute inset-0 -z-20" aria-hidden="true" />
        <div className="absolute -right-48 top-[-12rem] -z-10 h-[42rem] w-[42rem] rounded-full bg-emerald-100/70 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid min-h-[460px] max-w-[1240px] items-center gap-9 px-5 py-9 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-10">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Technology built for African institutions
            </div>
            <h1 className="max-w-3xl text-[clamp(2.2rem,4.2vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-[#0a2438]">
              Intelligence in every system.
              <span className="mt-2 block text-emerald-700">Impact in every decision.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              ArtSonGroup designs software and business intelligence solutions for organizations
              solving complex, high-impact problems across Uganda and the region.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link href="/contact" className="button-primary group">
                Discuss your project
                <i className="bi bi-arrow-up-right transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
              <Link href="#eafya" className="button-secondary">
                Explore eAFYA EMR
                <i className="bi bi-arrow-down" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-300/80 pt-4 text-[11px] font-semibold text-slate-600">
              <span className="flex items-center gap-2"><i className="bi bi-building-check text-emerald-700" /> Public-sector delivery</span>
              <span className="flex items-center gap-2"><i className="bi bi-shield-check text-emerald-700" /> Enterprise discipline</span>
              <span className="flex items-center gap-2"><i className="bi bi-geo-alt text-emerald-700" /> Kampala, Uganda</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl lg:mr-0">
            <div className="absolute -left-8 top-12 hidden w-44 rounded-xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur xl:block">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700"><i className="bi bi-hospital" /></span>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Flagship platform</p>
              <p className="mt-1 text-sm font-bold text-[#0a2438]">eAFYA EMR</p>
            </div>
            <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-[#0a2438] p-2.5 shadow-[0_30px_80px_rgba(10,36,56,0.22)] sm:p-3">
              <div className="flex items-center justify-between px-3 py-2 text-white/60">
                <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-white/30" /><span className="h-2 w-2 rounded-full bg-white/30" /><span className="h-2 w-2 rounded-full bg-emerald-400" /></div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Enterprise health platform</span>
              </div>
              <div className="relative aspect-[1.48/1] overflow-hidden rounded-xl bg-white">
                <Image src="/eafya-emr-portal.png" alt="eAFYA electronic medical record platform interface" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top" />
              </div>
            </div>
            <div className="absolute -bottom-6 right-3 flex items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 shadow-xl sm:right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white"><i className="bi bi-check2" /></span>
              <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">In operation</p><p className="text-sm font-bold text-[#0a2438]">Uganda government hospitals</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Built for institutions where reliability matters</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#0a2438]">
            <span>Government</span><span>Healthcare</span><span>Enterprise</span><span>Development partners</span>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-11 sm:py-14">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="mb-7 grid gap-4 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-kicker">What we do</p>
              <h2 className="section-title max-w-2xl">Technology that moves organizations forward.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 lg:justify-self-end">
              From core software to decision intelligence, we combine strategy, engineering, and
              implementation to deliver systems people can trust and use.
            </p>
          </div>
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className={`group relative bg-white p-5 transition-colors hover:bg-[#f3f8f5] ${index ? 'border-t border-slate-200 lg:border-l lg:border-t-0' : ''}`}>
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a2438] text-base text-white transition-transform group-hover:-translate-y-1"><i className={`bi ${service.icon}`} /></span>
                  <span className="text-sm font-bold text-slate-300">{service.number}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0a2438]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-xs font-semibold text-slate-700">
                  {service.capabilities.map((item) => <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="eafya" className="relative overflow-hidden bg-[#092638] py-8 text-white sm:py-10">
        <div className="absolute inset-0 opacity-20 corporate-grid-dark" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-10">
          <div className="overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] shadow-xl">
            <div className="relative aspect-[1.62/1] overflow-hidden bg-white">
              <Image src="/eafya-emr-portal.png" alt="eAFYA electronic medical record platform interface" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain object-center" />
            </div>
            <div className="flex items-start gap-3 border-t border-white/10 px-4 py-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-400/15 text-xs text-emerald-300"><i className="bi bi-activity" /></span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-300">From care to intelligence</p>
                <p className="mt-0.5 text-xs leading-5 text-white/65">Connected clinical workflows and operational data for stronger decisions.</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-3">
            <p className="section-kicker !text-emerald-300">Flagship product</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">eAFYA EMR</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              A comprehensive electronic medical record platform rolled out in government hospitals
              in Uganda, built to support connected care and stronger health-system intelligence.
            </p>
            <div className="mt-4 grid gap-x-5 gap-y-1 sm:grid-cols-2">
              {[
                ['bi-person-vcard', 'Patient-centred records', 'Structured information that supports continuity across the care journey.'],
                ['bi-diagram-3', 'Integrated operations', 'Clinical, administrative, and facility workflows in one connected environment.'],
                ['bi-graph-up-arrow', 'Decision-ready data', 'Operational information transformed into reporting and practical insight.'],
                ['bi-people', 'Adoption support', 'Implementation and capacity strengthening for teams using the system every day.'],
              ].map(([icon, title, text]) => (
                <div key={title} className="flex gap-2.5 border-t border-white/15 py-3">
                  <i className={`bi ${icon} mt-0.5 shrink-0 text-sm text-emerald-300`} />
                  <div>
                    <h3 className="text-xs font-semibold">{title}</h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-white/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/projects" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-emerald-300 transition hover:text-white">See the eAFYA platform <i className="bi bi-arrow-right" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ef] py-11 sm:py-14">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-36 lg:self-start">
              <p className="section-kicker">How we work</p>
              <h2 className="section-title">A delivery model built for lasting value.</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">Good technology is only useful when it fits the institution, earns user trust, and can be sustained long after launch.</p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-emerald-800">About ArtSonGroup <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className="divide-y divide-slate-300 border-y border-slate-300">
              {deliverySteps.map(([title, text], index) => (
                <article key={title} className="grid gap-3 py-5 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:items-start">
                  <span className="text-sm font-bold text-emerald-700">0{index + 1}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0a2438]">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-10">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-xl bg-emerald-700 px-6 py-7 text-white sm:px-8">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[70px] border-white/5" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-100">Build with us</p>
              <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">Let’s turn your most important challenge into a system that works.</h2>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-white px-5 text-sm font-bold text-emerald-800 transition hover:bg-[#0a2438] hover:text-white">Start a conversation <i className="bi bi-arrow-up-right" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
