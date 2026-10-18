'use client'

import { Fragment, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/articles'

const categories = [
  'All',
  'eAFYA EMR',
  'Data Mining',
  'National Health Dashboard',
  'Company News',
]

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' || article.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const featuredArticle = articles.find((a) => a.featured)

  const carouselArticles = useMemo(() => {
    if (activeCategory === 'All') return filteredArticles.filter((a) => !a.featured)
    return filteredArticles
  }, [filteredArticles, activeCategory])

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">News &amp; Blog</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed">
              Insights, product updates, and stories behind our digital health solutions powering
              organizations across East Africa.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-navy-light/40 bg-navy-light/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-2 transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-md'
                    : 'border border-navy-light/50 text-slate-300 hover:bg-navy-light/30 hover:text-white'
                } no-underline`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {activeCategory === 'All' && featuredArticle && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-emerald-600">
                  Featured
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy md:text-4xl line-clamp-2">
                  {featuredArticle.title}
                </h2>
                <p className="mb-6 text-slate-600 leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-lg font-medium transition-all duration-300 hover:bg-navy-dark no-underline hover:underline"
                >
                  Read article <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="group overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative h-48 w-full overflow-hidden bg-slate-900/10">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles section */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center items-center py-16 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px] z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-2 tracking-tight drop-shadow-md">
              {activeCategory === 'All' ? 'Featured Articles' : activeCategory}
            </h2>
            <p className="text-slate-200 text-lg font-medium drop-shadow-md text-center md:text-xl">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {activeCategory === 'All' ? (
            <div className="w-full overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950/95 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950/95 to-transparent z-20 pointer-events-none"></div>
              <div className="animate-marquee flex gap-6 py-4">
                {[...carouselArticles, ...carouselArticles].map((article, idx) => (
                  <div
                    key={`${article.id}-${idx}`}
                    className="w-[340px] sm:w-[380px] md:w-[420px] flex-shrink-0"
                  >
                    <article className="h-full flex flex-col rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md text-slate-900 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                          sizes="420px"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-md z-10">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <Link
                          href={`/blog/${article.id}`}
                          className="no-underline hover:underline block"
                        >
                          <h3 className="mb-3 text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-accent transition-colors">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="mb-6 text-sm text-slate-600 leading-relaxed flex-grow line-clamp-3">
                          {article.excerpt}
                        </p>
                        <Link
                          href={`/blog/${article.id}`}
                          className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-navy-dark no-underline hover:underline"
                        >
                          Read article <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full pt-8">
              <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 w-full">
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-20">
                    <i className="bi bi-search text-4xl text-slate-400 mb-4"></i>
                    <h3 className="text-xl font-bold text-white">No articles found</h3>
                    <p className="text-slate-400">
                      Try adjusting your search or category filter.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 grid grid-cols-1 md:grid-cols-12 transition duration-300">
                    {filteredArticles.map((article) => (
                      <Fragment key={article.id}>
                        <div
                          className="md:col-span-6 relative h-64 md:h-auto overflow-hidden bg-slate-900/10"
                        >
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                            {article.category}
                          </span>
                        </div>
                        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                              <span>{article.date}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                            <Link
                              href={`/blog/${article.id}`}
                              className="no-underline hover:underline block"
                            >
                              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                                {article.title}
                              </h2>
                            </Link>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                              {article.excerpt}
                            </p>
                          </div>
                          <div>
                            <Link
                              href={`/blog/${article.id}`}
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1b365d] hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-xl transition no-underline"
                            >
                              Read article <span className="text-lg">→</span>
                            </Link>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
