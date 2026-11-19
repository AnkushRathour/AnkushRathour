import { AboutSection } from '@/components/sections/AboutSection'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Ankush Rathour — Software Engineer building scalable APIs, cloud systems, and AI-powered products.',
  path: '/about/',
})

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ]}
      />
      <PageShell>
        <main>
          <AboutSection />
        </main>
      </PageShell>
    </>
  )
}