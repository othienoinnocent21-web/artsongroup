import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | ArtSonGroup',
  description: 'Explore ArtSonGroup flagship digital health and enterprise software projects.',
}

const projectStats = [
  { value: '12+', label: 'Systems Delivered', icon: 'bi-code-square' },
  { value: '20+', label: 'Organizations Supported', icon: 'bi-building' },
  { value: '5', label: 'Countries Served', icon: 'bi-globe' },
]

const additionalProjects = [
  {
    id: 'eafya-emr',
    title: 'eAFYA EMR',
    category: 'Government EMR',
    description:
      'Comprehensive Electronic Medical Record system deployed across national healthcare facilities.',
    image: '/inn.jpeg',
  },
  {
    id: 'data-mining',
    title: 'eAFYA Data Mining Tool',
    category: 'Analytics Engine',
    description:
      'Advanced clinical data extraction and analytical processing engine enabling aggregated health indicator reporting.',
    image: '/inno.jpeg',
  },
  {
    id: 'national-dashboard',
    title: 'National Health & Analytics Dashboard',
    category: 'National Portal',
    description:
      'Real-time national health visualization platform delivering data analytics and hospital indicator dashboards.',
    image: '/othieno.jpeg',
  },
]

const partners = [
  { label: 'Ministry of Health', icon: 'bi-heart-pulse' },
  { label: 'Government Agency', icon: 'bi-building' },
  { label: 'Regional Referral Hospital', icon: 'bi-hospital' },
  { label: 'Health NGO Partner', icon: 'bi-people' },
  { label: 'Private Enterprise', icon: 'bi-briefcase' },
  { label: 'Health Council', icon: 'bi-shield-check' },
]

export default function Projects() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-blue-950" />
          <div className="projects-ambient projects-ambient-primary absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="projects-ambient projects-ambient-accent absolute -bottom-40 left-[18%] h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
          <div className="projects-ambient projects-ambient-highlight absolute right-[38%] top-[12%] h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-red-300">
              Digital Health Projects
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Projects
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
              We build practical digital solutions that help organizations automate operations,
              improve efficiency, and deliver better services.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {projectStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 sm:p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg text-blue-200">
                    <i className={`bi ${stat.icon}`} aria-hidden="true" />
                  </span>
                  <span className="text-3xl font-extrabold text-white">{stat.value}</span>
                </div>
                <p className="mb-0 text-sm font-medium text-slate-300">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-red-600">
              Flagship Government EMR
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              eAFYA EMR
            </h2>
            <p className="mb-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Comprehensive Electronic Medical Record (EMR) system deployed across national
              healthcare facilities and government hospitals, streamlining patient management,
              clinical workflows, and health record digitization.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-navy-dark hover:shadow-lg"
              >
                View Case Study <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-navy px-5 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="group relative h-[320px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900/5 shadow-xl sm:h-[400px]">
              <Image
                src="/eafya-emr-portal.png"
                alt="eAFYA EMR portal with national health system modules"
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-red-600">
              Our Portfolio
            </p>
            <h2 className="mb-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Additional Featured Projects &amp; Systems
            </h2>
            <p className="max-w-2xl leading-relaxed text-slate-600">
              Explore more of our delivered digital solutions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project) => (
              <article
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold text-blue-900 shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 rounded-lg bg-[#1b365d] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-900">
                      Live Demo
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">
                      Case Study
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-red-600">
              Collaboration
            </p>
            <h2 className="mb-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Trusted by Organizations Across East Africa
            </h2>
            <p className="leading-relaxed text-slate-600">
              We have partnered with government agencies, Ministry of Health institutions, NGOs, and
              private enterprises across East Africa to deliver reliable digital solutions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-900">
                  <i className={`bi ${partner.icon}`} aria-hidden="true" />
                </span>
                <span className="font-semibold text-navy">{partner.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
