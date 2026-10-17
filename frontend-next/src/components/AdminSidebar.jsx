'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { label: 'Overview', to: '/admin', icon: 'bi-grid-1x2-fill', exact: true },
  { label: 'Company Management', to: '/admin/company', icon: 'bi-building', exact: true },
  { label: 'Board of Advisors', to: '/admin/company/advisors', icon: 'bi-people', exact: false },
  { label: 'Partners', to: '/admin/company/partners', icon: 'bi-diagram-3', exact: false },
  { label: 'Products', to: '/admin/products', icon: 'bi-box-seam', exact: false },
  { label: 'Services', to: '/admin/services', icon: 'bi-briefcase', exact: false },
  { label: 'Opportunities', to: '/admin/opportunities', icon: 'bi-megaphone', exact: false },
  { label: 'Blog / News', to: '/admin/blog', icon: 'bi-journal-text', exact: false },
  { label: 'Inquiries / Contacts', to: '/admin/inquiries', icon: 'bi-chat-left-text', exact: false },
  { label: 'Settings', to: '/admin/settings', icon: 'bi-gear', exact: false },
]

export default function AdminSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (item) =>
    item.exact ? pathname === item.to : pathname.startsWith(item.to)

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-shrink-0 flex-col overflow-y-auto bg-black p-5 text-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          href="/admin"
          className="mb-8 flex min-h-11 items-center gap-3 text-lg font-bold text-white no-underline hover:underline"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500">
            <i className="bi bi-cpu text-white" aria-hidden="true"></i>
          </span>
          <span>
            ArtSonGroup <span className="text-lime-400">Admin</span>
          </span>
        </Link>

        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Workspace
        </div>

        <nav className="flex flex-col gap-1" aria-label="Admin navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium no-underline transition hover:underline ${
                isActive(item)
                  ? 'bg-lime-500 text-black'
                  : 'text-slate-100 hover:bg-white/10 hover:text-lime-300'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className={`bi ${item.icon} w-5`} aria-hidden="true"></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-100 no-underline transition hover:bg-white/10 hover:text-lime-300 hover:underline"
          >
            <i className="bi bi-arrow-left" aria-hidden="true"></i>
            <span>Back to website</span>
          </Link>
          <div className="mt-3 px-3 text-sm text-slate-400">Admin workspace</div>
        </div>
      </aside>

      {/* Mobile top header (toggle button) */}
      <div className="fixed top-0 left-0 right-0 z-20 flex min-h-[76px] items-center justify-between border-b border-neutral-800 bg-black px-4 text-white lg:hidden">
        <button
          className="rounded border border-slate-500 px-3 py-2 text-white transition hover:bg-white/10"
          type="button"
          aria-label="Open navigation"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(true)}
        >
          <i className="bi bi-list text-xl" aria-hidden="true"></i>
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 rounded border border-lime-500 px-3 py-2 text-sm text-lime-300 no-underline transition hover:bg-lime-500 hover:text-black hover:underline"
        >
          <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          <span>View website</span>
        </Link>
      </div>
    </>
  )
}
