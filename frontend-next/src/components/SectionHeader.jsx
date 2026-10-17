const SectionHeader = ({ eyebrow, title, subtitle, align = 'start' }) => (
  <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-10`}>
    <span className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">
      {eyebrow}
    </span>
    <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">{title}</h2>
    {subtitle && <p className="mb-0 max-w-2xl text-slate-600">{subtitle}</p>}
  </div>
)

export default SectionHeader
