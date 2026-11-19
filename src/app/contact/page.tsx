import { ContactSection } from '@/components/sections/ContactSection'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Ankush Rathour — Software Engineer. Email, LinkedIn, GitHub, and professional profiles.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]}
      />
      <PageShell>
        <main>
          <ContactSection />
        </main>
      </PageShell>
    </>
  )
}