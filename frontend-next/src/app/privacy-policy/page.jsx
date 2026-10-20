export const metadata = {
  title: 'Privacy Policy | ArtSonGroup',
  description: 'Learn how ArtSonGroup handles information shared through its website and contact channels.',
}

const sections = [
  {
    title: 'Information you share',
    paragraphs: [
      'If you contact ArtSonGroup by email or another direct channel, you may share details such as your name, organization, email address, phone number, and information about your inquiry. Please do not send sensitive personal or health information through general contact channels.',
      'The contact form currently displayed on this website is a front-end demonstration: submitting it does not send or save the entered details. To reach our team, email info@artsongroup.com.',
    ],
  },
  {
    title: 'How information is used',
    paragraphs: [
      'Information you send directly to us may be used to respond to your message, assess a potential project or partnership, provide requested support, and maintain our business communications.',
    ],
  },
  {
    title: 'Sharing and storage',
    paragraphs: [
      'We do not publish the contents of private communications. Information may be shared where necessary to respond to your request, with your direction, or where disclosure is required by law. Information sent by email is handled by the relevant email service providers under their own terms and privacy practices.',
      'We retain direct communications for as long as reasonably needed for the purpose of the communication and our legitimate business record-keeping.',
    ],
  },
  {
    title: 'Your choices and questions',
    paragraphs: [
      'You may choose what information to include when contacting us. For questions or requests relating to information you have sent directly to ArtSonGroup, contact info@artsongroup.com.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy as our website or practices change. The date below indicates when this page was last reviewed.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#eef3f0] py-8 sm:py-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
          <p className="page-kicker">ArtSonGroup</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#0a2438] sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-600">Last updated: October 20, 2026</p>
        </div>
      </section>
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
          <p className="max-w-3xl text-sm leading-6 text-slate-600">
            This policy describes how ArtSonGroup handles information that you choose to share through this website or our direct contact channels.
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
