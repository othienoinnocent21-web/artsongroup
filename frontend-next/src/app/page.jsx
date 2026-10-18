'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const heroSlides = [
  {
    image: '/eafya-emr-portal.png',
    alt: 'eAFYA EMR portal with national health system modules',
  },
  {
    image: '/inno.jpeg',
    alt: 'eAFYA clinical data mining dashboard',
  },
  {
    image: '/othieno.jpeg',
    alt: 'National health and analytics dashboard',
  },
]

const aboutCards = [
  {
    title: 'Who We Are',
    description:
      'A health tech group helping institutions build information systems that are practical, trusted, and used for action.',
    link: 'Meet ArtSonGroup',
    href: '/about',
  },
  {
    title: 'Why We Do This',
    description:
      'Decisions in health programmes depend on timely, reliable information. Our work helps teams move from reporting to response.',
    link: 'See Our Work',
    href: '/projects',
  },
  {
    title: 'Our Story',
    description:
      'Our growth is rooted in public sector collaboration, EMR implementation experience, and long-term capacity building.',
    link: 'Read our story',
    href: '/about',
  },
]

const problems = ['Delayed reporting', 'Fragmented data', 'Limited visibility', 'Slow decision-making']

const solutions = [
  'eAFYA EMR implementations',
  'Interoperability & Data Mining',
  'National Health Dashboards',
  'Capacity strengthening',
  'Clinical data innovation',
]

const approachItems = [
  {
    number: '01',
    title: 'Implementation That Lasts',
    description:
      'We build practical digital health systems that are usable in the field, governable at national level, and sustainable after deployment.',
  },
  {
    number: '02',
    title: 'Capacity Built Into Delivery',
    description:
      'Training, mentoring, and operational support are designed into the work so local teams own the tools and the outcomes.',
  },
  {
    number: '03',
    title: 'Partnerships With Accountability',
    description:
      'Our work aligns government priorities, implementing partners, and technical teams around measurable public-sector results.',
  },
]

const reasonsToWorkWithUs = [
  {
    icon: 'bi-building-check',
    title: 'Grounded in public-sector delivery',
    description:
      'We work alongside ministries, health facilities, and implementation partners to fit systems to real workflows and priorities.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Connected health technology',
    description:
      'Our EMR, data mining, and dashboard capabilities help institutions connect routine clinical information to practical decisions.',
  },
  {
    icon: 'bi-people',
    title: 'Support that builds local ownership',
    description:
      'Capacity strengthening and ongoing collaboration help local teams confidently use and sustain the systems they rely on.',
  },
]

const featuredSystems = [
  {
    image: '/eafya-emr-portal.png',
    alt: 'eAFYA EMR portal system modules',
    badge: 'SYSTEM PREVIEW',
    title: 'eAFYA EMR Expands Across National Healthcare Facilities',
  },
  {
    image: '/inno.jpeg',
    alt: 'eAFYA Data Mining Tool',
    badge: 'CLINICAL ANALYTICS',
    title: 'eAFYA Data Mining Tool v1.6 Launched for Clinical Indicators',
  },
  {
    image: '/othieno.jpeg',
    alt: 'National Health and Analytics Dashboard',
    badge: 'HEALTH INTELLIGENCE',
    title: 'National Health & Analytics Dashboard Live Reporting',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [organizationSlide, setOrganizationSlide] = useState(0)
  const homeRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setOrganizationSlide((current) => (current + 1) % heroSlides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const home = homeRef.current
    if (!home) return

    const animatedItems = home.querySelectorAll('[data-home-aos]')
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
      { threshold: 0.15, rootMargin: '0px 0px -32px 0px' },
    )

    home.classList.add('home-animations-ready')
    animatedItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      home.classList.remove('home-animations-ready')
    }
  }, [])

  return (
    <div ref={homeRef} className="home-page">
      <section
        aria-label="ArtSonGroup introduction"
        className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-slate-900 sm:min-h-[720px]"
      >
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              role="img"
              aria-label={slide.alt}
              style={{ backgroundImage: `url("${slide.image}")` }}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 motion-reduce:transition-none ${
                activeSlide === index
                  ? 'opacity-100 hero-background-drift'
                  : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/20 to-slate-950/25" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl border-l-4 border-red-600 bg-white/90 p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
            <p
              key={`tagline-${activeSlide}`}
              className="hero-copy-enter mb-5 text-xs font-bold uppercase tracking-[0.16em] text-red-700 sm:text-sm"
            >
              ARTSONGROUP <span className="px-1 text-slate-400">•</span> Collaboration{' '}
              <span className="px-1 text-slate-400">•</span> Integration{' '}
              <span className="px-1 text-slate-400">•</span> Excellence
            </p>
            <h1
              key={`headline-${activeSlide}`}
              className="mb-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl"
              aria-label="Partnering for Better Health Outcomes"
            >
              {'Partnering for Better Health Outcomes'.split(' ').map((word, index) => (
                <span
                  key={`${activeSlide}-${word}-${index}`}
                  aria-hidden="true"
                  className="hero-word-enter inline-block"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p
              key={`description-${activeSlide}`}
              className="hero-copy-enter mb-8 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
              style={{ animationDelay: '220ms' }}
            >
              Working alongside government ministries, implementing partners, and communities to
              strengthen health systems through technology and strategic partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects#partners"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-bold text-navy shadow-sm ring-1 ring-slate-300 transition hover:bg-slate-100"
              >
                View Our Partners <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-navy/50 px-6 py-3 font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                Contact ArtSonGroup
              </Link>
            </div>
          </div>
        </div>

        <aside className="absolute bottom-14 right-4 z-10 w-[min(25rem,calc(100%-2rem))] overflow-hidden rounded-xl bg-red-600 p-5 text-white shadow-2xl sm:bottom-10 sm:right-8 sm:p-6 lg:right-[max(2rem,calc((100vw-80rem)/2))]">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.15em] text-white/80">
            Watch Our Latest Story
          </p>
          <p className="mb-0 text-sm font-semibold leading-relaxed sm:text-base">
            <span className="font-extrabold">EXPLORE OUR FLAGSHIP EMR</span>
            <span aria-hidden="true"> • </span>
            eAFYA EMR &amp; Data Mining Engine active across national facilities.
          </p>
          <Link
            href="/projects"
            className="mt-3 inline-flex items-center font-bold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
          >
            Explore our products <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </aside>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-6">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              aria-pressed={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
          <div className="self-center border-l-4 border-blue-900 bg-slate-50 px-7 py-9 sm:px-10 sm:py-12">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-red-600">
              Who We Are
            </p>
            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              A health technology organization strengthening national health information systems
              and clinical data use.
            </h2>
            <p className="mb-0 max-w-2xl text-lg leading-relaxed text-slate-600">
              ArtSonGroup works across healthcare facilities, government agencies, and regional
              referral hospitals to design, implement, and support sustainable digital health
              platforms.
            </p>
          </div>

          <div className="grid gap-4">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-slate-200 border-l-4 border-l-blue-900 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >
                <h3 className="mb-2 text-xl font-bold text-navy">{card.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {card.description}
                </p>
                <Link href={card.href} className="font-bold text-blue-700 transition hover:text-blue-900">
                  {card.link} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-blue-900"
            data-home-aos="fade-up"
          >
            Our Approach
          </span>
          <div className="mb-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            <h2
              className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:col-span-6"
              data-home-aos="fade-up"
            >
              Building Systems That Work
            </h2>
            <p
              className="text-base leading-relaxed text-slate-600 lg:col-span-6"
              data-home-aos="fade-up"
              style={{ '--home-aos-delay': '100ms' }}
            >
              ArtSonGroup brings implementation depth, public-sector discipline, and technology
              fluency together so information systems become part of how institutions actually
              operate.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {approachItems.map((item, index) => (
              <article
                key={item.number}
                data-home-aos="fade-up"
                style={{ '--home-aos-delay': `${index * 120}ms` }}
                className="group rounded-2xl border border-t-4 border-slate-200/80 border-t-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-lime-500 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span className="mb-4 block text-xl font-extrabold text-blue-900 transition group-hover:text-lime-600">
                  {item.number}
                </span>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-700 to-[#55225e] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-xl pb-12 pr-8 sm:pb-14 sm:pr-12" data-home-aos="fade-up">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/20 bg-slate-950/30 shadow-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={`organization-main-${slide.image}`}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    organizationSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={organizationSlide !== index}
                >
                  <Image
                    src={slide.image}
                    alt={organizationSlide === index ? slide.alt : ''}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover ${
                      organizationSlide === index ? 'hero-background-drift' : ''
                    }`}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 z-10 w-[min(17rem,62%)] rounded-xl border border-slate-200/70 bg-white p-5 text-slate-900 shadow-xl sm:p-6">
              <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                Operational Focus
              </p>
              <p className="mb-0 text-lg font-bold leading-snug">
                Data that moves from collection to action
              </p>
            </div>

            <div className="absolute bottom-3 right-0 z-10 h-32 w-[48%] overflow-hidden rounded-xl border-4 border-white bg-slate-900 shadow-2xl sm:h-44">
              <Image
                key={`organization-inset-${(organizationSlide + 1) % heroSlides.length}`}
                src={heroSlides[(organizationSlide + 1) % heroSlides.length].image}
                alt={heroSlides[(organizationSlide + 1) % heroSlides.length].alt}
                fill
                sizes="(max-width: 1024px) 48vw, 24vw"
                className="object-cover hero-background-drift"
              />
            </div>

            <div className="absolute -bottom-1 right-2 z-20 flex gap-2 rounded-full bg-slate-950/50 px-3 py-2 backdrop-blur-sm sm:right-6">
              {heroSlides.map((slide, index) => (
                <button
                  key={`organization-dot-${slide.image}`}
                  type="button"
                  aria-label={`Show organization image ${index + 1}`}
                  aria-pressed={organizationSlide === index}
                  onClick={() => setOrganizationSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    organizationSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="py-4">
            <p
              key={`organization-label-${organizationSlide}`}
              className="hero-copy-enter mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white/80 sm:text-sm"
            >
              Why Organizations Work With Us
            </p>
            <h2
              key={`organization-heading-${organizationSlide}`}
              className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {'Clear strategy, grounded execution, and stronger institutional ownership.'
                .split(' ')
                .map((word, index) => (
                  <span
                    key={`${organizationSlide}-${word}-${index}`}
                    className="hero-word-enter inline-block"
                    style={{ animationDelay: `${index * 65}ms` }}
                  >
                    {word}{' '}
                  </span>
                ))}
            </h2>
            <p
              key={`organization-description-${organizationSlide}`}
              className="hero-copy-enter mb-5 text-base leading-relaxed text-white/85"
              style={{ animationDelay: '120ms' }}
            >
              Our role is not just to introduce tools. We help institutions adopt better ways of
              collecting, governing, interpreting, and acting on information across programmes and
              teams.
            </p>
            <p className="mb-6 text-base leading-relaxed text-white/85">
              That means balancing innovation with operational reality: technical architecture,
              training, support, governance, and reporting all have to work together.
            </p>
            <ul className="grid gap-4">
              {reasonsToWorkWithUs.map((reason, index) => (
                <li
                  key={reason.title}
                  data-home-aos="fade-up"
                  style={{ '--home-aos-delay': `${index * 100}ms` }}
                  className="flex items-start gap-3 text-white/95"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs text-white">
                    <i className={`bi ${reason.icon}`} aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="font-bold">{reason.title}</strong>
                    <span className="block text-sm leading-relaxed text-white/75">
                      {reason.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white px-7 py-9 text-center shadow-sm sm:px-10">
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-800">
                <i className="bi bi-eye" aria-hidden="true" />
              </span>
              <h2 className="mb-2 text-2xl font-bold text-navy">Our Vision</h2>
              <p className="mb-0 text-slate-600">
                Sustainable health information systems for action.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white px-7 py-9 text-center shadow-sm sm:px-10">
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl text-red-700">
                <i className="bi bi-clock" aria-hidden="true" />
              </span>
              <h2 className="mb-2 text-2xl font-bold text-navy">Our Mission</h2>
              <p className="mb-0 text-slate-600">
                We design, implement, and promote integrated digital health platforms across
                national and regional health systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50/70 to-pink-50/70 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-red-600">
            Partner Testimonials
          </p>
          <h2 className="mb-10 text-3xl font-extrabold text-navy sm:text-4xl">
            What partners say about working with ArtSonGroup.
          </h2>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="font-serif text-2xl font-bold leading-relaxed text-navy sm:text-3xl lg:text-4xl">
              “The collaboration helped our clinical teams move from routine reporting to practical
              data use for programme decisions.”
            </blockquote>
            <figcaption className="mt-7 text-sm font-semibold text-slate-600 sm:text-base">
              Regional Referral Hospital Lead / MoH Implementation Partner
            </figcaption>
          </figure>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-900 sm:text-sm">
              Regional Referral Hospital
            </span>
            <span className="rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-red-800 sm:text-sm">
              MoH Implementation Partner
            </span>
          </div>
          <div className="mt-8 flex justify-center gap-2" aria-label="Testimonial slide indicator">
            <span className="h-2.5 w-8 rounded-full bg-blue-900" aria-current="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-900/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-900/20" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-red-600">
              Why We Do This
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Turning data into measurable outcomes.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 border-t-4 border-t-red-600 bg-white p-7 shadow-sm sm:p-9">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-red-700">
                The Problem
              </p>
              <h3 className="mb-6 text-2xl font-bold leading-snug text-navy">
                Many health systems still struggle to see and use data when it matters.
              </h3>
              <ul className="mb-0 grid gap-3 text-slate-700 sm:grid-cols-2">
                {problems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 border-t-4 border-t-blue-900 bg-white p-7 shadow-sm sm:p-9">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-blue-800">
                What We Design and Support
              </p>
              <h3 className="mb-6 text-2xl font-bold leading-snug text-navy">
                Practical systems that help teams report, connect, analyze, and act.
              </h3>
              <ul className="mb-0 grid gap-3 text-slate-700 sm:grid-cols-2">
                {solutions.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-800" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-red-600">
                Latest News
              </p>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                Stay updated with our recent activities and achievements
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center font-bold text-blue-800 hover:text-blue-950"
            >
              View all products <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredSystems.map((system) => (
              <article
                key={system.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href="/projects" className="block">
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <Image
                      src={system.image}
                      alt={system.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-red-700 shadow-sm">
                      {system.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold leading-snug text-navy">{system.title}</h3>
                    <span className="inline-flex items-center font-bold text-blue-800">
                      Explore system <span className="ml-2" aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
