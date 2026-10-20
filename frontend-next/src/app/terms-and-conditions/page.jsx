import Link from 'next/link'

export const metadata = {
  title: 'Terms and Conditions | ArtSonGroup',
  description: 'Read the terms for using the ArtSonGroup website.',
}

const sections = [
  {
    title: 'Using this website',
    paragraphs: [
      'This website provides general information about ArtSonGroup, its services, and its work. By using the website, you agree to use it lawfully and not to interfere with its operation or attempt to gain unauthorized access to its systems.',
    ],
  },
  {
    title: 'Website information and services',
    paragraphs: [
      'Website content is provided for general information and may change without notice. Descriptions of services or products are not an offer, guarantee of availability, or a substitute for a written agreement. Any project, support, or other engagement will be subject to terms agreed separately with ArtSonGroup.',
    ],
  },
  {
    title: 'Content and intellectual property',
    paragraphs: [
      'Unless otherwise noted, the text, visual identity, and other original materials on this website belong to ArtSonGroup or are used with permission. You may view and share links to public pages for personal or business reference. Do not reproduce or commercially use website materials without appropriate permission.',
    ],
  },
  {
    title: 'Third-party websites',
    paragraphs: [
      'This website may refer to third-party websites or services. ArtSonGroup does not control their content, availability, or policies, and visiting them is your choice.',
    ],
  },
  {
    title: 'Disclaimer and changes',
    paragraphs: [
      'The website is provided on an “as available” basis. To the extent permitted by applicable law, ArtSonGroup makes no guarantee that the website will always be available, uninterrupted, or free of errors. These terms may be updated from time to time; continued use of the website after changes are posted means you accept the updated terms.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'For questions about these terms, contact info@artsongroup.com. These website terms do not replace any separate written agreement between you and ArtSonGroup.',
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#eef3f0] py-8 sm:py-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
          <p className="page-kicker">ArtSonGroup</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#0a2438] sm:text-4xl">Terms and Conditions</h1>
          <p className="mt-2 text-sm text-slate-600">Last updated: October 20, 2026</p>
        </div>
      </section>
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
          <p className="max-w-3xl text-sm leading-6 text-slate-600">
            These terms apply to your use of the ArtSonGroup website. For information about how we handle information you share, see our{' '}
            <Link href="/privacy-policy" className="font-semibold text-emerald-800 underline underline-offset-2">Privacy Policy</Link>.
          </p>
          <div className="mt-7 max-w-3xl space-y-6">
            {sections.map(({ title, paragraphs }) => (
              <section key={title}>
                <h2 className="text-lg font-semibold text-[#0a2438]">{title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-sm leading-6 text-slate-600">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
