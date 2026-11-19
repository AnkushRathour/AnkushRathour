import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}