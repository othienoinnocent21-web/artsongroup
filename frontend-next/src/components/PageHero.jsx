export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#eef3f0] py-7 sm:py-9">
      <div className="corporate-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <p className="page-kicker">{eyebrow}</p>
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0a2438]">{title}</h1>
          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
            {children && <div className="mt-3 flex flex-wrap gap-2">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
