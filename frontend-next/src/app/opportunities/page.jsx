import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = { title: 'Opportunities | ArtSonGroup', description: 'Careers and partnership opportunities at ArtSonGroup.' }

export default function Opportunities() {
  return (
    <>
      <PageHero eyebrow="Opportunities" title="Do meaningful technology work with us." description="We bring together people who care about sound engineering, useful data, and technology that improves how institutions serve communities." />
      <section className="bg-white py-10 sm:py-12"><div className="mx-auto grid max-w-[1240px] gap-7 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="section-kicker">Current openings</p><h2 className="text-2xl font-semibold tracking-tight text-[#0a2438]">No advertised roles at the moment.</h2><p className="mt-3 max-w-md text-sm leading-6 text-slate-600">We still welcome thoughtful introductions from engineers, analysts, implementation specialists, and potential partners.</p></div><div className="grid gap-3 sm:grid-cols-2">{[['bi-code-square', 'Technical talent', 'Software engineering, data, product, and platform expertise.'], ['bi-people', 'Delivery talent', 'Implementation, training, customer success, and program expertise.'], ['bi-diagram-3', 'Partners', 'Technology, research, implementation, and development collaboration.'], ['bi-lightbulb', 'Future opportunities', 'Share your profile for consideration when a relevant need opens.']].map(([icon, title, text]) => <div key={title} className="rounded-lg border border-slate-200 bg-[#f7f8f6] p-4"><i className={`bi ${icon} text-emerald-700`} /><h3 className="mt-2 text-sm font-semibold text-[#0a2438]">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{text}</p></div>)}</div></div></section>
      <section className="border-t border-slate-200 bg-[#edf3ef] py-8"><div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><h2 className="text-xl font-semibold text-[#0a2438]">Introduce yourself to our team.</h2><p className="mt-1 text-xs text-slate-600">Send a concise note about the work you want to do and the value you bring.</p></div><Link href="/contact" className="button-primary">Get in touch <i className="bi bi-arrow-up-right" /></Link></div></section>
    </>
  )
}
