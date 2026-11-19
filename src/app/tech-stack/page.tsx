import { StackSection } from '@/components/sections/StackSection'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Tech Stack',
  description:
    'Technologies and proficiencies used by Ankush Rathour — Python, FastAPI, Django, cloud platforms, and modern frontend tooling.',
  path: '/tech-stack/',
})

export default function TechStackPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Tech Stack', path: '/tech-stack/' },
        ]}
      />
      <PageShell>
        <main>
          <StackSection />
        </main>
      </PageShell>
    </>
  )
}