import ApiStatus from './components/ApiStatus'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminLayout from './components/AdminLayout'
import AdminPage from './pages/AdminPage'
import { Home, About, Services, Projects, Contact, Blog } from './pages'

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-grow">
      <ApiStatus />
      <Outlet />
    </main>
    <Footer />
  </div>
)

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="company" element={<AdminPage />} />
        <Route path="company/advisors" element={<AdminPage />} />
        <Route path="company/partners" element={<AdminPage />} />
        <Route path="products" element={<AdminPage />} />
        <Route path="services" element={<AdminPage />} />
        <Route path="opportunities" element={<AdminPage />} />
        <Route path="inquiries" element={<AdminPage />} />
        <Route path="settings" element={<AdminPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App