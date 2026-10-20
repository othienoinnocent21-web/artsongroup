import Link from 'next/link'
import PageHero from '@/components/PageHero'

const services = [
  ['bi-code-slash', 'Software development', 'Web, mobile, and enterprise software built around demanding institutional workflows.', ['Product engineering', 'Enterprise applications', 'API and systems integration']],
  ['bi-bar-chart-line', 'Business intelligence', 'Connected data, reporting, and dashboards that make performance visible and actionable.', ['Executive dashboards', 'Data pipelines', 'Reporting automation']],
  ['bi-heart-pulse', 'Digital health', 'Health information platforms that support care delivery, reporting, and operational oversight.', ['Electronic medical records', 'Clinical analytics', 'Health systems integration']],
  ['bi-diagram-3', 'Systems integration', 'Practical interoperability between platforms, teams, and sources of operational data.', ['API architecture', 'Legacy integration', 'Data exchange']],
  ['bi-people', 'Implementation & adoption', 'Structured rollout, training, and support that help technology become part of daily work.', ['Deployment planning', 'User training', 'Change support']],
  ['bi-headset', 'Managed support', 'Responsive technical partnership for systems that need to remain dependable over time.', ['Application support', 'Monitoring', 'Continuous improvement']],
]

export default function ServicesClient() {
  return (
    <>
      <PageHero eyebrow="Our capabilities" title="Strategy, engineering, and delivery in one team." description="We design, build, connect, and support technology for organizations that need clear outcomes—not more complexity.">
        <Link href="/contact" className="button-primary">Discuss a requirement <i className="bi bi-arrow-up-right" /></Link>
      </PageHero>
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-xl border border-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([icon, title, text, features], index) => <article key={title} className={`p-5 transition hover:bg-[#f3f8f5] ${index > 0 ? 'border-t border-slate-200 md:border-l' : ''} ${index === 2 ? 'md:border-l-0 lg:border-l' : ''} ${index === 3 ? 'lg:border-l-0' : ''}`}><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a2438] text-sm text-white"><i className={`bi ${icon}`} /></span><h2 className="mt-3 text-lg font-semibold tracking-tight text-[#0a2438]">{title}</h2><p className="mt-1 text-sm leading-5 text-slate-600">{text}</p><ul className="mt-3 space-y-1.5 border-t border-slate-200 pt-3 text-xs font-semibold text-slate-600">{features.map((feature) => <li key={feature} className="flex gap-2"><i className="bi bi-check2 text-emerald-700" />{feature}</li>)}</ul></article>)}
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-[#edf3ef] py-9 sm:py-10">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div><p className="section-kicker">Delivery model</p><h2 className="text-2xl font-semibold tracking-tight text-[#0a2438]">Clear from first question to long-term support.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2">{[['01', 'Discover', 'Clarify users, operations, data, risk, and success.'], ['02', 'Design', 'Shape the experience and technical architecture.'], ['03', 'Deliver', 'Build, test, integrate, and deploy in stages.'], ['04', 'Enable', 'Train teams, support adoption, and improve.']].map(([n, title, text]) => <div key={n} className="bg-white p-4"><span className="text-[10px] font-bold text-emerald-700">{n}</span><h3 className="mt-1 text-sm font-semibold text-[#0a2438]">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{text}</p></div>)}</div>
        </div>
      </section>
    </>
  )
}
