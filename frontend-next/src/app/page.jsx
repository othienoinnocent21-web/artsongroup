import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import ApiStatus from '@/components/ApiStatus'

const services = [
  {
    icon: 'bi-code-slash',
    title: 'Custom Web Development',
    desc: 'Modern, responsive web applications built with React, Node, and cloud-native stacks.',
    features: ['React & Next.js', 'TypeScript', 'Responsive design', 'Performance tuning'],
  },
  {
    icon: 'bi-cloud',
    title: 'Cloud Solutions',
    desc: 'Migrate, architect, and optimize infrastructure on AWS, Azure, and GCP.',
    features: ['IaC with Terraform', 'Serverless architecture', 'Cost optimization', '99.9% uptime'],
  },
  {
    icon: 'bi-brain',
    title: 'AI & Data Engineering',
    desc: 'Turn data into decisions with ML models, pipelines, and intelligent automation.',
    features: ['Predictive analytics', 'Data pipelines', 'LLM integrations', 'MLOps'],
  },
]

const recentEngagements = [
  {
    id: 'eafya-emr',
    category: 'Healthcare Tech',
    title: 'eAFYA EMR Platform',
    description:
      'Flagship Electronic Medical Record system digitizing patient workflows and health records across national hospitals.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/inn.jpeg',
    link: '/projects',
  },
  {
    id: 'data-mining',
    category: 'Clinical Analytics',
    title: 'eAFYA Data Mining Tool',
    description:
      'Advanced data extraction engine delivering clinical indicator reporting, cohort tracking, and health intelligence.',
    tags: ['React', 'Express', 'MySQL', 'Analytics'],
    image: '/inno.jpeg',
    link: '/projects',
  },
  {
    id: 'national-dashboard',
    category: 'National Health Portal',
    title: 'National Health & Analytics Dashboard',
    description:
      'Real-time health visualization platform providing hospital indicators and executive reporting across regional centers.',
    tags: ['Spring Boot', 'React', 'D3.js', 'PostgreSQL'],
    image: '/othieno.jpeg',
    link: '/projects',
  },
]

export default function Home() {
  return (
    <>
      <ApiStatus />

      {/* Hero */}
      <section className="hero-section py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-lime-700">
                <i className="bi bi-stars" aria-hidden="true"></i>
                About ArtSonGroup
              </span>
              <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
                Driving <span className="text-lime-600">Digital Innovation</span>
                <br />
                Across Africa
              </h1>
              <p className="mb-6 text-lg text-slate-600">
                We are a leading technology company dedicated to empowering businesses with
                innovative cloud solutions, intelligent software, and actionable data analytics.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-lg bg-lime-600 px-5 py-3 font-semibold text-white transition hover:bg-lime-700 no-underline hover:underline"
                >
                  Explore Our Services <i className="bi bi-arrow-right ml-2" aria-hidden="true"></i>
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 no-underline hover:underline"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="hero-visual flex items-center justify-center">
              <div className="hero-orbit" aria-hidden="true"></div>
              <div className="hero-center flex items-center justify-center">
                <i className="bi bi-cloud-check" aria-hidden="true"></i>
              </div>
              <div className="hero-chip hero-chip-top flex items-center gap-2">
                <i className="bi bi-graph-up-arrow text-lime-600" aria-hidden="true"></i>
                <span>Smart analytics</span>
              </div>
              <div className="hero-chip hero-chip-bottom flex items-center gap-2">
                <i className="bi bi-shield-check text-lime-600" aria-hidden="true"></i>
                <span>Cloud solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="A complete technology partner"
            subtitle="End-to-end services spanning strategy, design, engineering, and support."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard {...service} key={service.title} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-lg border border-navy px-6 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white no-underline hover:underline"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Engagements */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Selected work"
            title="Recent engagements"
            subtitle="Real systems built for healthcare, government, and national health institutions across East Africa."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {recentEngagements.map((project) => (
              <ProjectCard {...project} key={project.id} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex rounded-lg border border-navy px-6 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white no-underline hover:underline"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-bold md:text-5xl">Ready to build something great?</h2>
          <p className="mx-auto mb-6 max-w-xl text-lg text-slate-200">
            Let us help you transform your business with technology that scales.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-blue-600 px-7 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 no-underline hover:underline"
          >
            Get a free consultation
          </Link>
        </div>
      </section>
    </>
  )
}
