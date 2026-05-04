import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { StackSection } from '@/components/sections/StackSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ShowcaseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
