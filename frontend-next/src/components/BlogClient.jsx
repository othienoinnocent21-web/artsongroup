'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/articles'

const categories = ['All', ...new Set(articles.map((article) => article.category))]

export default function BlogClient() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const featured = articles.find((article) => article.featured) || articles[0]
  const showFeatured = category === 'All' && !query.trim()

  const visible = useMemo(() => {
    const search = query.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = category === 'All' || article.category === category
      const matchesSearch = !search || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(search)
      return matchesCategory && matchesSearch && (!showFeatured || article.id !== featured.id)
    })
  }, [category, query, featured.id, showFeatured])

  return (
    <>
      <section className="relative overflow-hidden bg-[#092638] py-8 text-white sm:py-10">
        <div className="corporate-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1120px] gap-6 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">ArtSonGroup Blog</p>
            <h1 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.04em]">Ideas, product stories, and practical lessons.</h1>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-6 text-white/60">Updates from our work in software, business intelligence, digital health, and institutional technology delivery.</p>
            <div className="relative mt-4 max-w-xl"><i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the blog" className="h-10 w-full rounded-md border border-white/15 bg-white/10 pl-10 pr-3 text-xs text-white outline-none placeholder:text-white/35 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/15" /></div>
          </div>
        </div>
      </section>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-1.5 px-5 py-3 sm:px-8 lg:px-10">
          <span className="mr-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Topics</span>
          {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-3 py-1 text-[10px] font-bold transition ${category === item ? 'bg-[#0a2438] text-white' : 'border border-slate-200 text-slate-600 hover:border-emerald-600 hover:text-emerald-800'}`}>{item}</button>)}
        </div>
      </div>

      {showFeatured && (
        <section className="bg-[#f3f6f4] py-8 sm:py-10">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
            <article className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
              <Link href={`/blog/${featured.id}`} className="relative min-h-56 overflow-hidden bg-slate-100 lg:min-h-72"><Image src={featured.image} alt={featured.title} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top transition duration-500 hover:scale-[1.02]" /></Link>
              <div className="flex flex-col justify-center p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em]"><span className="text-emerald-700">Featured</span><span className="text-slate-300">/</span><span className="text-slate-400">{featured.category}</span></div>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#0a2438]">{featured.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-slate-400"><span>{featured.date}</span><span>·</span><span>{featured.readTime}</span></div>
                <Link href={`/blog/${featured.id}`} className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold text-emerald-800">Read featured article <i className="bi bi-arrow-right" /></Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="section-kicker">{showFeatured ? 'More from the blog' : 'Blog results'}</p><h2 className="text-xl font-semibold text-[#0a2438]">Articles and updates</h2></div><span className="text-[10px] font-semibold text-slate-400">{visible.length} article{visible.length === 1 ? '' : 's'}</span></div>
          {visible.length ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((article) => (
                <article key={article.id} className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg">
                  <Link href={`/blog/${article.id}`}>
                    <div className="relative h-36 overflow-hidden bg-slate-100"><Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-105" /></div>
                    <div className="p-4"><div className="flex items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-[0.12em]"><span className="text-emerald-700">{article.category}</span><span className="text-slate-400">{article.date}</span></div><h3 className="mt-2 text-base font-semibold leading-snug text-[#0a2438]">{article.title}</h3><p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">{article.excerpt}</p><span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-[#0a2438]">Read article <i className="bi bi-arrow-right transition group-hover:translate-x-1" /></span></div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 py-10 text-center"><i className="bi bi-search text-xl text-slate-300" /><p className="mt-2 text-sm font-semibold text-[#0a2438]">No matching articles</p><p className="mt-1 text-xs text-slate-500">Try another topic or search term.</p></div>
          )}
        </div>
      </section>
    </>
  )
}
