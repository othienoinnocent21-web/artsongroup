'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

const sections = [
  {
    id: 'using-this-website',
    title: 'Using this website',
    paragraphs: [
      'This website provides general information about ArtSonGroup, its services, and its work. By using the website, you agree to use it lawfully and not to interfere with its operation or attempt to gain unauthorized access to its systems.',
    ],
  },
  {
    id: 'website-information-and-services',
    title: 'Website information and services',
    paragraphs: [
      'Website content is provided for general information and may change without notice. Descriptions of services or products are not an offer, guarantee of availability, or a substitute for a written agreement. Any project, support, or other engagement will be subject to terms agreed separately with ArtSonGroup.',
    ],
  },
  {
    id: 'content-and-intellectual-property',
    title: 'Content and intellectual property',
    paragraphs: [
      'Unless otherwise noted, the text, visual identity, and other original materials on this website belong to ArtSonGroup or are used with permission. You may view and share links to public pages for personal or business reference. Do not reproduce or commercially use website materials without appropriate permission.',
    ],
  },
  {
    id: 'third-party-websites',
    title: 'Third-party websites',
    paragraphs: [
      'This website may refer to third-party websites or services. ArtSonGroup does not control their content, availability, or policies, and visiting them is your choice.',
    ],
  },
  {
    id: 'disclaimer-and-changes',
    title: 'Disclaimer and changes',
    paragraphs: [
      'The website is provided on an “as available” basis. To the extent permitted by applicable law, ArtSonGroup makes no guarantee that the website will always be available, uninterrupted, or free of errors. These terms may be updated from time to time; continued use of the website after changes are posted means you accept the updated terms.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'For questions about these terms, contact info@artsongroup.com. These website terms do not replace any separate written agreement between you and ArtSonGroup.',
    ],
  },
]

export default function TermsAndConditionsContent() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [searchTerm, setSearchTerm] = useState('')
  const articleRef = useRef(null)

  const visibleSections = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase()
    if (!query) return sections

    return sections.filter((section) =>
      [section.title, ...section.paragraphs].join(' ').toLocaleLowerCase().includes(query),
    )
  }, [searchTerm])

  useEffect(() => {
    const article = articleRef.current
    const sectionElements = article?.querySelectorAll('.terms-section')
    if (!sectionElements?.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0]

        if (visibleEntry) setActiveSection(visibleEntry.target.id)
      },
      { root: article, rootMargin: '-8% 0px -72% 0px', threshold: 0 },
    )

    sectionElements.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [visibleSections])

  return (
    <div className="terms-page">
      <section className="border-b border-slate-100 bg-white py-9 sm:py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079B96]">ArtSonGroup · Legal</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#16311a] sm:text-4xl lg:text-[2.75rem]">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm font-semibold italic text-[#00D492] sm:text-base">Website Terms of Use</p>
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-500">
              Last updated: October 20, 2026
            </p>
          </div>

          <div className="terms-actions flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
            <label className="relative min-w-0 flex-1 sm:min-w-[250px] lg:w-[270px]">
              <span className="sr-only">Search terms sections</span>
              <i className="bi bi-search pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search sections..."
                className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#00D492] focus:ring-4 focus:ring-[#00D492]/15"
              />
            </label>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#077784] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#055f68] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D492]"
            >
              <i className="bi bi-printer" aria-hidden="true" />
              Print Terms
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1240px] gap-8 border-y border-slate-100 px-5 py-8 sm:px-8 sm:py-10 lg:h-[350px] lg:min-h-[290px] lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-0 lg:overflow-hidden lg:px-0 lg:py-6">
        <aside className="terms-toc h-fit lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:border-r lg:border-slate-100 lg:px-5 lg:py-1 xl:px-8" aria-label="Terms and conditions navigation">
          <h2 className="text-[11px] font-extrabold tracking-[0.16em] text-slate-500">TABLE OF CONTENTS</h2>
          <nav className="mt-2" aria-label="Table of contents">
            <ol className="space-y-1">
              {sections.map((section, index) => {
                if (!visibleSections.some(({ id }) => id === section.id)) return null
                const isActive = activeSection === section.id
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`flex items-start gap-2 rounded-md px-3 py-2 text-[13px] leading-5 transition ${
                        isActive
                          ? 'bg-[#E6FAF6] font-bold text-[#077784]'
                          : 'text-slate-600 hover:bg-[#F0FCF9] hover:text-[#077784]'
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className="shrink-0 tabular-nums">{index + 1}.</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </nav>
        </aside>

        <article ref={articleRef} className="terms-content min-w-0 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:px-8 lg:pr-10 xl:px-10">
          {searchTerm.trim() && (
            <p className="mb-5 text-sm text-slate-500" role="status" aria-live="polite">
              {visibleSections.length
                ? `${visibleSections.length} ${visibleSections.length === 1 ? 'section' : 'sections'} match “${searchTerm.trim()}”.`
                : `No sections match “${searchTerm.trim()}”.`}
            </p>
          )}
          <p className="mb-5 text-sm leading-6 text-slate-600">
            These terms apply to your use of the ArtSonGroup website. For information about how we handle information you share, see our{' '}
            <Link href="/privacy-policy" className="font-semibold text-[#077784] underline underline-offset-2">Privacy Policy</Link>.
          </p>
          {visibleSections.length ? (
            visibleSections.map((section) => {
              const index = sections.findIndex(({ id }) => id === section.id)
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="terms-section scroll-mt-8 border-b border-slate-100 py-6 first:pt-0 last:border-0 sm:py-7"
                >
                  <h2 className="text-lg font-bold tracking-[-0.02em] text-[#079B96] sm:text-xl">
                    <span className="mr-2 text-[#00D492]">{index + 1}.</span>
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-[15px] leading-7 text-slate-600">{paragraph}</p>
                  ))}
                </section>
              )
            })
          ) : (
            <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center text-sm text-slate-500">
              No terms sections match your search.
            </p>
          )}
        </article>
      </div>

      <footer className="border-t border-slate-100 bg-slate-50/70 px-5 py-6 text-center text-xs leading-5 text-[#1e3b66] sm:px-8">
        <p>ArtSonGroup — Terms and Conditions</p>
        <p className="font-semibold text-[#079B96]">ArtSonGroup Corporation Limited — Your Innovation Partner</p>
      </footer>
    </div>
  )
}
