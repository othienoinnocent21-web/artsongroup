import { Link, useLocation } from 'react-router-dom'

const descriptions = {
  '/admin/company': 'Manage company details and the organization’s public profile.',
  '/admin/company/advisors': 'Manage Board of Advisors profiles and their public information.',
  '/admin/company/partners': 'Manage partner organizations and partnership details.',
  '/admin/products': 'Manage software products and platform offerings.',
  '/admin/services': 'Manage IT, cloud, and consulting service listings.',
  '/admin/opportunities': 'Manage career openings, tenders, and other postings.',
  '/admin/blog': 'Create and manage articles, announcements, and news.',
  '/admin/inquiries': 'Review customer inquiries and contact form submissions.',
  '/admin/settings': 'Manage administrator profile and system preferences.',
}

const dashboardSections = [
  { label: 'Company Management', description: 'Company profile, advisors, and partners', to: '/admin/company', icon: 'bi-building' },
  { label: 'Products', description: 'Software products and offerings', to: '/admin/products', icon: 'bi-box-seam' },
  { label: 'Services', description: 'IT and cloud service listings', to: '/admin/services', icon: 'bi-briefcase' },
  { label: 'Opportunities', description: 'Careers, tenders, and postings', to: '/admin/opportunities', icon: 'bi-megaphone' },
  { label: 'Blog / News', description: 'Articles and announcements', to: '/admin/blog', icon: 'bi-journal-text' },
  { label: 'Inquiries / Contacts', description: 'Messages and form submissions', to: '/admin/inquiries', icon: 'bi-chat-left-text' },
  { label: 'Settings', description: 'Administrator profile and preferences', to: '/admin/settings', icon: 'bi-gear' },
]

const cardClass = 'rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg'

const AdminPage = () => {
  const { pathname } = useLocation()

  if (pathname === '/admin') {
    return (
      <div>
        <div className="mb-8">
          <span className="mb-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">Platform administration</span>
          <h2 className="mb-2 text-3xl font-bold text-slate-900">Welcome to your dashboard</h2>
          <p className="text-slate-600">Choose a section to manage your website content and incoming inquiries.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {dashboardSections.map((section) => (
            <Link key={section.to} to={section.to} className={`${cardClass} p-6 no-underline hover:underline`}>
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-xl text-lime-700">
                  <i className={`bi ${section.icon}`} aria-hidden="true"></i>
                </span>
                <i className="bi bi-arrow-up-right text-slate-400" aria-hidden="true"></i>
              </div>
              <h3 className="mb-1 font-bold text-slate-900">{section.label}</h3>
              <p className="text-sm text-slate-600">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  const pageTitle = {
    '/admin/company': 'Company Management',
    '/admin/company/advisors': 'Board of Advisors',
    '/admin/company/partners': 'Partners',
    '/admin/products': 'Products',
    '/admin/services': 'Services',
    '/admin/opportunities': 'Opportunities',
    '/admin/blog': 'Blog / News',
    '/admin/inquiries': 'Inquiries / Contacts',
    '/admin/settings': 'Settings',
  }[pathname] || 'Management'

  return (
    <div>
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/admin" className="text-slate-500 no-underline hover:text-slate-900 hover:underline">Overview</Link>
          <i className="bi bi-chevron-right" aria-hidden="true"></i>
          {pageTitle}
        </div>
        <h2 className="mb-2 text-3xl font-bold text-slate-900">{pageTitle}</h2>
        <p className="text-slate-600">{descriptions[pathname] || 'Manage your platform settings.'}</p>
      </div>

      {pathname === '/admin/company' && (
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { label: 'Company details', to: '/admin/company', icon: 'bi-building' },
            { label: 'Board of Advisors', to: '/admin/company/advisors', icon: 'bi-people' },
            { label: 'Partners', to: '/admin/company/partners', icon: 'bi-diagram-3' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className={`${cardClass} p-5 text-slate-900 no-underline hover:underline`}>
              <span className="flex items-center gap-3 font-semibold">
                <i className={`bi ${item.icon} text-green-700`} aria-hidden="true"></i>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}

      <section className={`${cardClass} p-8 text-center md:p-12`}>
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lime-100 text-2xl text-lime-700">
          <i className="bi bi-inbox" aria-hidden="true"></i>
        </span>
        <h3 className="mb-3 text-xl font-semibold text-slate-900">Manage {pageTitle.toLowerCase()}</h3>
        <p className="mx-auto max-w-2xl text-slate-600">
          This section is ready for your content. Management actions will be available when the admin data workflows are connected.
        </p>
      </section>
    </div>
  )
}

export default AdminPage
