import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'

export async function generateStaticParams() {
  return articles.map((article) => ({ id: String(article.id) }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const article = articles.find((item) => item.id === Number(id))
  return article ? { title: `${article.title} | ArtSonGroup Blog`, description: article.excerpt } : {}
}

export default async function BlogDetail({ params }) {
  const { id } = await params
  const article = articles.find((item) => item.id === Number(id))
  if (!article) notFound()
  const related = articles.filter((item) => item.id !== article.id).slice(0, 2)

  return (
    <article className="bg-white">
      <header className="relative overflow-hidden bg-[#092638] py-8 text-white sm:py-10">
        <div className="corporate-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-[960px] px-5 sm:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300"><i className="bi bi-arrow-left" />Back to Blog</Link>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/45"><span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-emerald-300">{article.category}</span><span>{article.date}</span><span aria-hidden="true">·</span><span>{article.readTime}</span></div>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.35rem)] font-semibold leading-[1.05] tracking-[-0.04em]">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">{article.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto max-w-[960px] px-5 py-8 sm:px-8 sm:py-10">
        <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-slate-200 bg-slate-100"><Image src={article.image} alt={article.title} fill priority sizes="960px" className="object-cover object-top" /></div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_15rem]">
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            {article.body.map((paragraph, index) => <p key={index} className={index === 0 ? 'text-base font-medium leading-7 text-[#0a2438]' : ''}>{paragraph}</p>)}
            <div className="mt-7 border-t border-slate-200 pt-4"><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Published by</p><p className="mt-1 text-sm font-semibold text-[#0a2438]">{article.author}</p></div>
          </div>

          <aside className="lg:border-l lg:border-slate-200 lg:pl-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-700">More from the Blog</p>
            <div className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
              {related.map((item) => <Link key={item.id} href={`/blog/${item.id}`} className="group block py-4"><span className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">{item.category}</span><h2 className="mt-1 text-sm font-semibold leading-5 text-[#0a2438] transition group-hover:text-emerald-700">{item.title}</h2><span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">Read article <i className="bi bi-arrow-right" /></span></Link>)}
            </div>
            <div className="mt-5 rounded-lg bg-[#eef3f0] p-4"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-700">Have a project?</p><p className="mt-1 text-xs leading-5 text-slate-600">Talk to our team about software, data, or digital health.</p><Link href="/contact" className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0a2438]">Contact us <i className="bi bi-arrow-up-right" /></Link></div>
          </aside>
        </div>
      </div>
    </article>
  )
}
