import { HeroSection } from '@/components/sections/HeroSection'
import { HomeHighlights } from '@/components/sections/HomeHighlights'
import { PageShell } from '@/components/layout/PageShell'
import { homeMetadata } from '@/lib/metadata'
import { LEGACY_HASH_ROUTES } from '@/lib/site'

export const metadata = homeMetadata

const legacyHashScript = `(() => { if (location.pathname !== '/') return; const hash = location.hash.replace(/^#/, ''); const routes = ${JSON.stringify(LEGACY_HASH_ROUTES)}; if (routes[hash]) location.replace(routes[hash]); })();`

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: legacyHashScript }} />
      <PageShell>
        <main>
          <HeroSection />
          <HomeHighlights />
        </main>
      </PageShell>
    </>
  )
}