import AdminSidebar from '@/components/AdminSidebar'

export const metadata = {
  title: 'Admin | ArtSonGroup',
}

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />
      <div className="flex min-w-0 flex-grow flex-col">
        <main className="flex-grow p-4 md:p-6 xl:p-10">{children}</main>
      </div>
    </div>
  )
}
