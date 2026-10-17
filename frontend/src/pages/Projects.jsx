const projects = [
  {
    image: 'image_agent_tag_7724975392895777666',
    badge: 'bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md',
    badgeText: 'Analytics Engine',
    title: 'eAFYA Data Mining Tool',
    desc: 'Advanced clinical data extraction and analytical processing engine enabling aggregated health indicator reporting, cohort tracking, and Ministry of Health data intelligence.',
    primary: 'Live Demo',
    secondary: 'Case Study',
  },
  {
    image: 'image_agent_tag_7724975392895776092',
    badge: 'bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md',
    badgeText: 'National Portal',
    title: 'National Health & Analytics Dashboard',
    desc: 'Real-time national health visualization platform delivering data analytics, hospital indicator dashboards, and executive reporting across regional referral centers.',
    primary: 'Live Site',
    secondary: 'Case Study',
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

const Projects = () => {
  return (
    <>
      {/* 1. Hero / Title Section */}
      <section className="py-12 md:py-24 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Projects</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed">
              We build practical digital solutions that help organizations automate operations, improve efficiency, and deliver better services. From internal business systems to public-facing digital platforms, our work is designed for real operational impact.
            </p>
          </div>

          {/* Impact metrics stat badges */}
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

      {/* 2. Featured Flagship Project (Government Solution) */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 space-y-5">
              <span className="bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                Flagship Government EMR
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
                eAFYA EMR
              </h2>
              <p className="mb-6 text-slate-600 leading-relaxed">
                Comprehensive Electronic Medical Record (EMR) system deployed across national healthcare facilities and government hospitals, streamlining patient management, clinical workflows, and health record digitization.
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
            <div className="order-1 lg:order-2 group overflow-hidden">
              <img
                src={`image_agent_tag_7724975392895774831`}
                alt="eAFYA EMR screenshot"
                className="w-full h-64 md:h-80 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Additional Featured Projects & Systems Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Additional Featured Projects & Systems
            </h2>
            <p className="text-slate-600">Explore more of our delivered digital solutions.</p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="h-full flex flex-col rounded-2xl border border-slate-200 bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-xl rounded-t-2xl h-48 md:h-56 group">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 {project.badge}">
                    {project.badgeText}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="mb-3 text-xl font-bold text-navy">{project.title}</h3>
                  <p className="mb-6 text-sm text-slate-600 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href="#"
                      className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-navy-dark"
                    >
                      {project.primary}
                    </a>
                    {project.secondary && (
                      <a
                        href="#"
                        className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg transition-all duration-300 hover:border-navy hover:text-navy hover:shadow-sm"
                      >
                        {project.secondary}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust & Credibility Section (Client Logos / Partners) */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Trusted by Organizations Across East Africa
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
              We have partnered with government agencies, Ministry of Health institutions, NGOs, and private enterprises across East Africa to deliver reliable digital solutions.
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

export default Projects
