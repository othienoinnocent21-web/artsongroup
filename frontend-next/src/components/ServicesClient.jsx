'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'

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
  {
    icon: 'bi-shield-check',
    title: 'Cybersecurity',
    desc: 'Hardening, penetration testing, and continuous security monitoring.',
    features: ['Vulnerability scanning', 'Zero-trust design', 'Compliance audits', 'SOC 2'],
  },
  {
    icon: 'bi-phone',
    title: 'Mobile Development',
    desc: 'Cross-platform iOS and Android apps with a single codebase.',
    features: ['React Native', 'Flutter', 'Offline-first', 'App store deployment'],
  },
  {
    icon: 'bi-cogs',
    title: 'DevOps & SRE',
    desc: 'Automated CI/CD, observability, and incident response for modern teams.',
    features: ['GitHub Actions', 'Kubernetes', 'Monitoring dashboards', 'SLA support'],
  },
]

export default function ServicesClient() {
  const servicesPageRef = useRef(null)

  useEffect(() => {
    const page = servicesPageRef.current
    if (!page) return

    const animatedItems = page.querySelectorAll('[data-aos]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      animatedItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -32px 0px' }
    )

    page.classList.add('services-animations-ready')
    animatedItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      page.classList.remove('services-animations-ready')
    }
  }, [])

  return (
    <div className="services-page" ref={servicesPageRef}>
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span
            className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800"
            data-aos="fade-down"
          >
            Services
          </span>
          <h1
            className="mb-5 text-4xl font-bold md:text-6xl"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Capabilities engineered for scale
          </h1>
          <p
            className="mb-0 max-w-2xl text-lg text-slate-200"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            From strategy to deployment, we offer the full stack of technology services your
            organization needs to compete.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span
              className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800"
              data-aos="fade-down"
            >
              What we do
            </span>
            <h2
              className="mb-3 text-3xl font-bold text-navy md:text-4xl"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              A complete technology partner
            </h2>
            <p className="mb-0 max-w-2xl text-slate-600" data-aos="fade-down" data-aos-delay="200">
              End-to-end services spanning strategy, design, engineering, and support.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, index) => (
              <div
                className="min-w-0"
                key={s.title}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">
                Process
              </span>
              <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">How we work</h2>
              <p className="mb-8 text-slate-600">
                A transparent, milestone-driven approach from discovery to launch.
              </p>
              {[
                { n: '01', t: 'Discovery', d: 'We map goals, constraints, and success metrics.' },
                { n: '02', t: 'Architecture', d: 'Cloud-native design reviewed by senior architects.' },
                { n: '03', t: 'Build', d: 'Iterative delivery with continuous integration and review.' },
                { n: '04', t: 'Launch & Scale', d: 'Deploy, monitor, and scale with 24/7 support.' },
              ].map((step) => (
                <div key={step.n} className="mb-5 flex gap-4">
                  <span className="text-2xl font-bold text-accent">{step.n}</span>
                  <div>
                    <h3 className="mb-1 font-bold text-navy">{step.t}</h3>
                    <p className="mb-0 text-sm text-slate-600">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="rounded-2xl bg-navy p-8 text-white shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">Ready to transform?</h3>
                <p className="mb-6 text-slate-200">
                  Tell us about your challenge and we will get back within one business day.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 no-underline hover:underline"
                >
                  Schedule a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
