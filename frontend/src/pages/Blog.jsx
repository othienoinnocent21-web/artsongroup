import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'eAFYA EMR', 'Data Mining', 'National Health Dashboard', 'Company News']

const articles = [
  {
    id: 1,
    title: 'eAFYA EMR: Digitizing Patient Records Across National Health Facilities',
    category: 'eAFYA EMR',
    excerpt:
      'How our flagship Electronic Medical Record system is streamlining patient management, clinical workflows, and health record digitization across government hospitals.',
    image: 'image_agent_tag_7724975392895774831',
    date: 'Oct 14, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Advanced Clinical Insights with the eAFYA Data Mining Tool',
    category: 'Data Mining',
    excerpt:
      'Exploring the analytical processing engine behind aggregated health indicator reporting, cohort tracking, and Ministry of Health data intelligence.',
    image: 'image_agent_tag_7724975392895777666',
    date: 'Oct 10, 2026',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'National Health & Analytics Dashboard Goes Live',
    category: 'National Health Dashboard',
    excerpt:
      'A real-time national health visualization platform delivering data analytics, hospital indicator dashboards, and executive reporting across regional referral centers.',
    image: 'image_agent_tag_7724975392895776092',
    date: 'Oct 5, 2026',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'ArtSonGroup Expands Digital Health Partnerships Across East Africa',
    category: 'Company News',
    excerpt:
      'We have partnered with government agencies, Ministry of Health institutions, NGOs, and private enterprises to deliver reliable digital solutions across the region.',
    image: 'image_agent_tag_7724975392895774831',
    date: 'Sep 28, 2026',
    readTime: '3 min read',
  },
]

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory
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

  return (
    <>
      {/* Hero / Search & Filter Section */}
      <section className="py-12 md:py-20 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">News & Blog</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed">
              Insights, product updates, and stories behind our digital health solutions powering organizations across East Africa.
            </p>
          </div>

          {/* Live Search Bar */}
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

          {/* Category Filter Tabs */}
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

      {/* Featured Article Hero (shown when viewing 'All') */}
      {activeCategory === 'All' && featuredArticle && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-emerald-600">
                  Featured
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mb-6 text-slate-600 leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-lg font-medium transition-all duration-300 hover:bg-navy-dark no-underline hover:underline"
                >
                  Read article <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="lg:col-span-6 group overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {activeCategory === 'All' ? 'Featured Articles' : activeCategory}
            </h2>
            <p className="text-slate-600">{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found</p>
          </div>

          <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="h-full flex flex-col rounded-2xl border border-slate-200 bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-xl rounded-t-2xl h-48 md:h-56 group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-navy shadow-sm">
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-navy line-clamp-2">{article.title}</h3>
                  <p className="mb-6 text-sm text-slate-600 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-navy-dark no-underline hover:underline"
                  >
                    Read article <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <i className="bi bi-search text-4xl text-slate-300 mb-4"></i>
              <h3 className="text-xl font-bold text-navy">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog
