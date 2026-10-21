'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'This Privacy Statement explains how ArtSonGroup (“we”, “us”, or “our”) handles personal information when you visit our website, contact us, or enquire about our services. We aim to handle information lawfully, fairly, and transparently.',
      'This statement applies to information collected through this website and our direct business communications. It does not replace any separate privacy notice that may apply to a specific product, service, or engagement.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    paragraphs: [
      'The information we handle depends on how you interact with us. It may include:',
    ],
    items: [
      'Contact and identity details you provide, such as your name, organization, email address, telephone number, and job title.',
      'Enquiry and correspondence details, including the information and attachments you choose to include in a message or project enquiry.',
      'Technical and usage information that may be recorded when you visit the website, such as your IP address, browser type, device information, pages visited, and access times, as part of ordinary website operation and security.',
    ],
    closing: 'Please do not send sensitive personal information through general website or email contact channels unless it is necessary and an appropriate secure method has been agreed.',
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    paragraphs: [
      'We may use information we receive to:',
    ],
    items: [
      'Respond to questions, requests, and service or partnership enquiries.',
      'Assess, prepare, and manage potential or current business relationships and projects.',
      'Operate, maintain, secure, and improve our website, services, and communications.',
      'Meet legal obligations, protect our rights, and prevent misuse or security incidents.',
    ],
    closing: 'We process information only where there is an appropriate legal basis, such as your consent, steps taken at your request, our legitimate business interests, or compliance with a legal obligation.',
  },
  {
    id: 'data-sharing-and-disclosure',
    title: 'Data Sharing and Disclosure',
    paragraphs: [
      'We do not sell personal information. We may share information when reasonably necessary with service providers who support our website, communications, or business operations; with professional advisers; or with project partners where this is relevant to your request and handled appropriately.',
      'We may also disclose information where you ask us to, where disclosure is required by law, or where it is reasonably necessary to establish, exercise, or defend legal rights. Where service providers handle information for us, we expect them to protect it and use it only for the agreed purpose.',
      'Information may be processed or stored in countries outside the place where it was collected. Where this occurs, we take steps appropriate to the circumstances and applicable data protection requirements.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    paragraphs: [
      'We use reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, alteration, or disclosure. Safeguards are selected with regard to the nature of the information and the risks involved.',
      'No method of transmission or electronic storage is completely secure. If you believe information sent to us has been compromised, please contact us promptly so we can review the matter.',
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    paragraphs: [
      'We retain personal information only for as long as reasonably necessary for the purposes described in this statement, including responding to you, managing a business relationship, maintaining appropriate records, and meeting legal requirements.',
      'Retention periods vary depending on the type of information and the context in which it was collected. When information is no longer needed, we take reasonable steps to delete it or remove identifying details.',
    ],
  },
  {
    id: 'your-legal-rights',
    title: 'Your Legal Rights',
    paragraphs: [
      'Depending on applicable law and the circumstances, you may have the right to request access to personal information we hold about you, ask us to correct inaccurate information, request deletion or restriction of processing, or object to certain processing. Where we rely on consent, you may withdraw it; this does not affect processing that took place before withdrawal.',
      'The Data Protection and Privacy Act, 2019 of Uganda may provide rights and protections for individuals. To make a request or raise a concern, contact us using the details below. We may need to verify your identity and will respond in accordance with applicable law.',
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    paragraphs: [
      'For questions, privacy requests, or concerns about this statement or the way we handle personal information, contact ArtSonGroup:',
    ],
    items: [
      'Email: info@artsongroup.com',
      'Location: Kampala, Uganda',
    ],
    closing: 'We may update this statement from time to time. The effective date and version shown above indicate the version published on this page.',
  },
]

export default function PrivacyPolicyContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const articleRef = useRef(null)

  const visibleSections = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase()
    if (!query) return sections

    return sections.filter((section) => {
      const searchableText = [
        section.title,
        ...section.paragraphs,
        ...(section.items ?? []),
        section.closing ?? '',
      ].join(' ').toLocaleLowerCase()

      return searchableText.includes(query)
    })
  }, [searchTerm])

  useEffect(() => {
    const article = articleRef.current
    const sectionElements = article?.querySelectorAll('.privacy-policy-section')
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
    <div className="privacy-policy-page">
      <section className="border-b border-slate-100 bg-white py-9 sm:py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079B96]">ArtSonGroup · Privacy</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#16311a] sm:text-4xl lg:text-[2.75rem]">
              ArtSonGroup Privacy Statement
            </h1>
            <p className="mt-2 text-sm font-semibold italic text-[#00D492] sm:text-base">Data Protection &amp; Comprehensive Legal Framework</p>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-500">
              <span>EFFECTIVE: 01.04.2025</span>
              <span aria-hidden="true" className="text-[#00D492]">•</span>
              <span>VERSION 1.0.0</span>
            </p>
          </div>

          <div className="privacy-actions flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
            <label className="relative min-w-0 flex-1 sm:min-w-[250px] lg:w-[270px]">
              <span className="sr-only">Search policy sections</span>
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
              Print Privacy Policy
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1240px] gap-8 border-y border-slate-100 px-5 py-8 sm:px-8 sm:py-10 lg:h-[350px] lg:min-h-[290px] lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-0 lg:overflow-hidden lg:px-0 lg:py-6">
        <aside className="privacy-toc h-fit lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:border-r lg:border-slate-100 lg:px-5 lg:py-1 xl:px-8" aria-label="Privacy statement navigation">
          <h2 className="text-[11px] font-extrabold tracking-[0.16em] text-slate-500">TABLE OF CONTENTS</h2>
          <nav className="mt-2" aria-label="Table of contents">
            <ol className="space-y-1">
              {sections.map((section, index) => {
                const isVisible = visibleSections.some(({ id }) => id === section.id)
                if (!isVisible) return null

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

        <article ref={articleRef} className="privacy-policy-content min-w-0 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:px-8 lg:pr-10 xl:px-10">
          {searchTerm.trim() && (
            <p className="mb-5 text-sm text-slate-500" role="status" aria-live="polite">
              {visibleSections.length
                ? `${visibleSections.length} ${visibleSections.length === 1 ? 'section' : 'sections'} match “${searchTerm.trim()}”.`
                : `No sections match “${searchTerm.trim()}”.`}
            </p>
          )}

          {visibleSections.length ? (
            <div className="space-y-0">
              {visibleSections.map((section) => {
                const sectionNumber = sections.findIndex(({ id }) => id === section.id) + 1
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="privacy-policy-section scroll-mt-28 border-b border-slate-100 py-6 first:pt-0 last:border-0 sm:py-7"
                  >
                    <h2 className="text-lg font-bold tracking-[-0.02em] text-[#079B96] sm:text-xl">
                      <span className="mr-2 text-[#00D492]">{sectionNumber}.</span>
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-600">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {section.items && (
                        <ul className="list-disc space-y-2 pl-6 marker:text-[#00D492]">
                          {section.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      )}
                      {section.closing && <p>{section.closing}</p>}
                    </div>
                  </section>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
              <i className="bi bi-search text-2xl text-slate-400" aria-hidden="true" />
              <p className="mt-3 font-semibold text-slate-700">No matching sections</p>
              <p className="mt-1 text-sm text-slate-500">Try another search term or clear your search.</p>
            </div>
          )}
        </article>
      </div>

      <footer className="border-t border-slate-100 bg-slate-50/70 px-5 py-6 text-center text-xs leading-5 text-[#1e3b66] sm:px-8">
        <p>Confidential — ArtSonGroup Corporation Limited</p>
        <p className="font-semibold text-[#079B96]">ArtSonGroup Corporation Limited — Your Innovation Partner</p>
      </footer>
    </div>
  )
}
