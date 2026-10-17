import Link from 'next/link'

export const metadata = {
  title: 'Opportunities | ArtSonGroup',
  description: 'Career openings, tenders, and partnership opportunities at ArtSonGroup.',
}

export default function Opportunities() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">
            Opportunities
          </span>
          <h1 className="mb-5 text-4xl font-bold md:text-6xl">Join ArtSonGroup</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-200">
            Explore career openings, tenders, and partnership opportunities with our growing team
            across East Africa.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-3xl text-lime-700">
            <i className="bi bi-megaphone" aria-hidden="true"></i>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-navy">No open positions right now</h2>
          <p className="mb-8 max-w-xl mx-auto text-slate-600">
            We are always looking for talented people. Send us your CV and we will reach out when a
            suitable opportunity arises.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-dark no-underline hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
