import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'eAFYA EMR & Solutions | ArtSonGroup',
  description: 'Explore eAFYA EMR and ArtSonGroup digital health intelligence solutions.',
}

const modules = [
  ['bi-person-vcard', 'Patient management'],
  ['bi-clipboard2-pulse', 'Clinical workflows'],
  ['bi-capsule', 'Pharmacy management'],
  ['bi-eyedropper', 'Laboratory workflows'],
  ['bi-box-seam', 'Supply chain'],
  ['bi-graph-up', 'Reporting & analytics'],
]

const solutions = [
  { title: 'eAFYA EMR', label: 'Core clinical platform', image: '/eafya-emr-portal.png', text: 'A connected electronic medical record environment supporting clinical and operational workflows.' },
  { title: 'eAFYA Data Mining', label: 'Clinical intelligence', image: '/inno.jpeg', text: 'An analytics layer for extracting, aggregating, and interpreting routine health information.' },
  { title: 'Health Analytics Dashboard', label: 'Decision support', image: '/othieno.jpeg', text: 'Clear visualization of health indicators for program, facility, and leadership teams.' },
]

export default function Projects() {
  return (
    <>
      <PageHero eyebrow="Flagship product" title="eAFYA EMR: connected care, useful data." description="ArtSonGroup’s electronic medical record platform is rolled out in government hospitals in Uganda, supporting clinical work and stronger health-system visibility.">
        <Link href="/contact" className="button-primary">Talk to the eAFYA team <i className="bi bi-arrow-up-right" /></Link>
      </PageHero>

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#0a2438] p-2 shadow-xl">
            <div className="relative aspect-[1.52/1] overflow-hidden rounded-lg bg-white"><Image src="/eafya-emr-portal.png" alt="eAFYA EMR module interface" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top" /></div>
          </div>
          <div>
            <p className="section-kicker">One operational environment</p>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a2438]">Designed around the work of a health facility.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">eAFYA brings essential clinical and administrative functions into a connected platform, reducing fragmentation and creating a stronger foundation for reporting and decisions.</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">{modules.map(([icon, label]) => <div key={label} className="flex items-center gap-2.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"><i className={`bi ${icon} text-emerald-700`} />{label}</div>)}</div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f4f6f4] py-10 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="mb-6"><p className="section-kicker">eAFYA ecosystem</p><h2 className="text-2xl font-semibold tracking-tight text-[#0a2438]">From the point of care to the decision room.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {solutions.map((solution) => <article key={solution.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><div className="relative h-36 bg-slate-100"><Image src={solution.image} alt={solution.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" /></div><div className="p-4"><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-700">{solution.label}</p><h3 className="mt-1 text-base font-semibold text-[#0a2438]">{solution.title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{solution.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#092638] py-9 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {[['Implementation', 'Structured rollout aligned to facility operations and stakeholder priorities.'], ['Capacity strengthening', 'Practical enablement for clinical, administrative, and technical teams.'], ['Ongoing support', 'A continuing technical relationship that protects system value after launch.']].map(([title, text], i) => <div key={title} className="border-t border-white/15 pt-3"><span className="text-[10px] font-bold text-emerald-300">0{i + 1}</span><h3 className="mt-2 text-base font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-white/60">{text}</p></div>)}
        </div>
      </section>
    </>
  )
}
