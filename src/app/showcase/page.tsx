import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Technical Showcase',
  description:
    'Unified multimodal AI agent architecture — WhatsApp, LLM orchestration, ElevenLabs voice, and Twilio SIP telephony.',
  path: '/showcase/',
})

export default function ShowcasePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Technical Showcase', path: '/showcase/' },
        ]}
      />
      <PageShell>
        <main>
          <ShowcaseSection />
        </main>
      </PageShell>
    </>
  )
}