import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'

export async function generateStaticParams() {
  return articles.map((a) => ({ id: String(a.id) }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const article = articles.find((a) => a.id === Number(id))
  if (!article) return {}
  return {
    title: `${article.title} | ArtSonGroup`,
    description: article.excerpt,
  }
}

export default async function BlogDetail({ params }) {
  const { id } = await params
  const article = articles.find((a) => a.id === Number(id))

  if (!article) notFound()

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 mb-6 gap-1 no-underline"
          >
            ← Back to Articles
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {article.category}
            </span>
            <span className="text-xs text-slate-500">
              {article.date} • {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            {article.title}
          </h1>

          <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 mb-10 bg-slate-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover object-top hover:scale-105 transition duration-500"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-slate-700 text-lg leading-relaxed">
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
