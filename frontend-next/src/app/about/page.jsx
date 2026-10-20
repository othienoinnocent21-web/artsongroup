import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About | ArtSonGroup',
  description: 'Meet the Ugandan technology team behind ArtSonGroup and eAFYA EMR.',
}

const capabilities = [
  ['bi-code-slash', 'Software engineering', 'Reliable systems shaped around real operations.'],
  ['bi-bar-chart-line', 'Business intelligence', 'Data made useful for leaders and frontline teams.'],
  ['bi-people', 'Implementation', 'Delivery, adoption, and support in one partnership.'],
]

const principles = [
  ['01', 'Outcome-led', 'We begin with the institutional result, not a predetermined tool.'],
  ['02', 'Built together', 'Users and technical teams stay involved from discovery through adoption.'],
  ['03', 'Dependable by design', 'Security, maintainability, and operational reality guide every decision.'],
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#092638] py-9 text-white sm:py-11">
        <div className="corporate-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">About ArtSonGroup</p>
            <h1 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
              Ugandan technology expertise, built around institutional impact.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              We help organizations design, build, and sustain software and data systems for complex,
              high-impact operating environments.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-emerald-400 px-5 text-xs font-bold text-[#092638] transition hover:bg-white">Work with us <i className="bi bi-arrow-up-right" /></Link>
              <Link href="/services" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/20 px-5 text-xs font-bold text-white transition hover:bg-white/10">Our capabilities <i className="bi bi-arrow-right" /></Link>
            </div>
          </div>

          <aside className="rounded-xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">What we bring together</p>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="divide-y divide-white/10">
              {capabilities.map(([icon, title, text]) => (
                <div key={title} className="flex gap-3 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-sm text-emerald-300"><i className={`bi ${icon}`} /></span>
                  <div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-0.5 text-[11px] leading-4 text-white/50">{text}</p></div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-9 sm:py-11">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div>
            <p className="section-kicker">Who we are</p>
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0a2438]">A delivery partner, not just a software vendor.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <p className="text-sm leading-6 text-slate-600">ArtSonGroup combines technical delivery with a practical understanding of how institutions operate. We work across software engineering, information systems, analytics, and implementation.</p>
            <p className="text-sm leading-6 text-slate-600">Our approach keeps technology connected to the people, workflows, governance, and decisions it is meant to support—through launch and beyond.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef3f0] py-9 sm:py-11">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="section-kicker">From promise to proof</p>
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0a2438]">eAFYA EMR reflects how we build.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Our flagship electronic medical record platform is rolled out in government hospitals in Uganda. It brings clinical and operational workflows into a connected environment while creating more useful health information.</p>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-300 pt-4">
              {['Local context', 'Institutional ownership', 'Long-term support'].map((item) => <div key={item}><span className="mb-1 block h-1.5 w-1.5 rounded-full bg-emerald-600" /><p className="text-[11px] font-bold leading-4 text-[#0a2438]">{item}</p></div>)}
            </div>
            <Link href="/projects" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-emerald-800">Explore eAFYA EMR <i className="bi bi-arrow-right" /></Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#092638] p-2 shadow-lg">
            <div className="relative aspect-[1.7/1] overflow-hidden rounded-lg bg-white"><Image src="/eafya-emr-portal.png" alt="eAFYA electronic medical record platform" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-contain" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-9 sm:py-11">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-[0.55fr_1.45fr]">
            <div><p className="section-kicker">How we work</p><h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#0a2438]">Principles for lasting value.</h2></div>
            <div className="grid overflow-hidden rounded-xl border border-slate-200 md:grid-cols-3">
              {principles.map(([number, title, text], index) => <article key={title} className={`p-4 ${index ? 'border-t border-slate-200 md:border-l md:border-t-0' : ''}`}><span className="text-[10px] font-bold text-emerald-700">{number}</span><h3 className="mt-2 text-sm font-semibold text-[#0a2438]">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#092638] py-7 text-white">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-300">Kampala, Uganda</p><h2 className="mt-1 text-xl font-semibold">Build a dependable system with a locally grounded team.</h2></div>
          <Link href="/contact" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 text-xs font-bold text-[#092638]">Start a conversation <i className="bi bi-arrow-up-right" /></Link>
        </div>
      </section>
    </>
  )
}
