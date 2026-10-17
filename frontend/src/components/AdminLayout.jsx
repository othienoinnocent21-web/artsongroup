import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Overview', to: '/admin', icon: 'bi-grid-1x2-fill', end: true },
  { label: 'Company Management', to: '/admin/company', icon: 'bi-building', end: true },
  { label: 'Board of Advisors', to: '/admin/company/advisors', icon: 'bi-people' },
  { label: 'Partners', to: '/admin/company/partners', icon: 'bi-diagram-3' },
  { label: 'Products', to: '/admin/products', icon: 'bi-box-seam' },
  { label: 'Services', to: '/admin/services', icon: 'bi-briefcase' },
  { label: 'Opportunities', to: '/admin/opportunities', icon: 'bi-megaphone' },
  { label: 'Blog / News', to: '/admin/blog', icon: 'bi-journal-text' },
  { label: 'Inquiries / Contacts', to: '/admin/inquiries', icon: 'bi-chat-left-text' },
  { label: 'Settings', to: '/admin/settings', icon: 'bi-gear' },
]

const pageTitles = {
  '/admin': 'Overview',
  '/admin/company': 'Company Management',
  '/admin/company/advisors': 'Board of Advisors',
  '/admin/company/partners': 'Partners',
  '/admin/products': 'Products',
  '/admin/services': 'Services',
  '/admin/opportunities': 'Opportunities',
  '/admin/blog': 'Blog / News',
  '/admin/inquiries': 'Inquiries / Contacts',
  '/admin/settings': 'Settings',
}

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const currentTitle = pageTitles[location.pathname] || 'Overview'

  return (
    <div className="flex min-h-screen bg-slate-50">
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-shrink-0 flex-col overflow-y-auto bg-black p-5 text-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Link to="/admin" className="mb-8 flex min-h-11 items-center gap-3 text-lg font-bold text-white no-underline hover:underline">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500">
            <i className="bi bi-cpu text-white" aria-hidden="true"></i>
          </span>
          <span>Arston <span className="text-lime-400">Admin</span></span>
        </Link>

        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Workspace</div>
        <nav className="flex flex-col gap-1" aria-label="Admin navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium no-underline transition hover:underline ${isActive ? 'bg-lime-500 text-black' : 'text-slate-100 hover:bg-white/10 hover:text-lime-300'}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className={`bi ${item.icon} w-5`} aria-hidden="true"></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-100 no-underline transition hover:bg-white/10 hover:text-lime-300 hover:underline">
            <i className="bi bi-arrow-left" aria-hidden="true"></i>
            <span>Back to website</span>
          </Link>
          <div className="mt-3 px-3 text-sm text-slate-400">Admin workspace</div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-grow flex-col">
        <header className="flex min-h-[76px] items-center justify-between border-b border-neutral-800 bg-black px-4 text-white lg:px-8">
          <div className="flex items-center gap-3">
            <button
              className="rounded border border-slate-500 px-3 py-2 text-white transition hover:bg-white/10 lg:hidden"
              type="button"
              aria-label="Open navigation"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(true)}
            >
              <i className="bi bi-list text-xl" aria-hidden="true"></i>
            </button>
            <div>
              <div className="text-sm text-slate-400">Admin workspace</div>
              <h1 className="text-lg font-semibold">{currentTitle}</h1>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-2 rounded border border-lime-500 px-3 py-2 text-sm text-lime-300 no-underline transition hover:bg-lime-500 hover:text-black hover:underline">
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
            <span className="hidden sm:inline">View website</span>
          </Link>
        </header>
        <main className="flex-grow p-4 md:p-6 xl:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
