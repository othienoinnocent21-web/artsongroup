import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({ title, category, description, tags = [], image, link = '/projects' }) => (
  <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    {/* Image Container */}
    <div className="relative h-48 sm:h-52 w-full bg-slate-900/10 overflow-hidden rounded-t-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-top hover:scale-105 transition duration-500"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm z-10">
        {category}
      </span>
    </div>
    {/* Card Body */}
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mb-4 text-sm text-slate-600 leading-relaxed">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-navy"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link href={link} className="text-sm font-semibold text-accent no-underline hover:underline">
        View case study <i className="bi bi-arrow-right ml-1"></i>
      </Link>
    </div>
  </div>
)

export default ProjectCard
