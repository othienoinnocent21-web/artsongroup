const ProjectCard = ({ title, category, desc, tech = [], image }) => (
  <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="flex h-44 items-center justify-center bg-navy text-white">
      <i className={`bi ${image || 'bi-layers'} text-4xl text-accent`}></i>
    </div>
    <div className="p-6">
      <span className="text-sm font-semibold text-accent">{category}</span>
      <h3 className="mb-2 mt-1 text-xl font-bold text-navy">{title}</h3>
      <p className="mb-3 text-sm text-slate-600">{desc}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-navy">{t}</span>
        ))}
      </div>
      <a href="#contact" className="text-sm font-semibold text-accent no-underline hover:underline">
        View case study <i className="bi bi-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
)

export default ProjectCard