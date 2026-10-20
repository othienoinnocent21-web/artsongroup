import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ArtSonGroup | Software, Business Intelligence & Digital Health',
  description:
    'ArtSonGroup builds enterprise software, business intelligence, and digital health solutions, including eAFYA EMR for government hospitals in Uganda.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
