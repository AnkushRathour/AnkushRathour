import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Projects',
  description:
    'Selected projects by Ankush Rathour including AudioMaker, GoogleMapsScraper, and ChatPDF.',
  path: '/projects/',
})

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects/' },
        ]}
      />
      <PageShell>
        <main>
          <ProjectsSection />
        </main>
      </PageShell>
    </>
  )
}