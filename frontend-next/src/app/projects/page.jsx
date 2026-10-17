import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | ArtSonGroup',
  description: 'Explore ArtSonGroup flagship digital health and enterprise software projects.',
}

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
      {/* Hero */}
      <section className="py-12 md:py-24 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Projects</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed">
              We build practical digital solutions that help organizations automate operations,
              improve efficiency, and deliver better services.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3 text-center">
            {[
              { value: '12+', label: 'Systems Delivered', icon: 'bi-code-square' },
              { value: '20+', label: 'Organizations Supported', icon: 'bi-building' },
              { value: '5', label: 'Countries Served', icon: 'bi-globe' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-navy-light/40 bg-navy-light/30"
              >
                <div className="mb-2 flex items-center justify-center gap-1.5">
                  <i className={`bi ${stat.icon} text-accent-2`}></i>
                  <span className="text-3xl font-bold text-accent-2">{stat.value}</span>
                </div>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured flagship */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
              <span className="bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                Flagship Government EMR
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
                eAFYA EMR
              </h2>
              <p className="mb-6 text-slate-600 leading-relaxed">
                Comprehensive Electronic Medical Record (EMR) system deployed across national
                healthcare facilities and government hospitals, streamlining patient management,
                clinical workflows, and health record digitization.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="px-5 py-3 bg-navy text-white rounded-lg font-medium transition-all duration-300 hover:bg-navy-dark hover:shadow-lg"
                >
                  View Case Study
                </a>
                <a
                  href="#"
                  className="px-5 py-3 border border-navy text-navy rounded-lg font-medium transition-all duration-300 hover:bg-navy hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900/5 group">
                <Image
                  src="/inn.jpeg"
                  alt="eAFYA EMR Dashboard Screenshot"
                  fill
                  className="object-cover object-top hover:scale-105 transition duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional projects grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Additional Featured Projects &amp; Systems
            </h2>
            <p className="text-slate-600">Explore more of our delivered digital solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="relative h-52 w-full bg-slate-900/10 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm z-10">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-[#1b365d] hover:bg-blue-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition">
                      Live Demo
                    </button>
                    <button className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs py-2.5 px-4 rounded-lg transition">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Trusted by Organizations Across East Africa
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
              We have partnered with government agencies, Ministry of Health institutions, NGOs, and
              private enterprises across East Africa to deliver reliable digital solutions.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3 items-center justify-center">
            {partners.map((partner) => (
              <div
                key={partner.label}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <i className={`bi ${partner.icon} text-xl`}></i>
                </div>
                <span className="text-sm font-medium text-navy">{partner.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
