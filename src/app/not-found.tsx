import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'
import { SITE_TITLE } from '@/lib/site'

export default function NotFound() {
  return (
    <PageShell>
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-4xl font-bold text-[var(--ink)]">Page not found</h1>
          <p className="text-[var(--ink-muted)] mt-4">
            The page you requested is not available. Return to the {SITE_TITLE} portfolio home.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold"
          >
            Go home
          </Link>
        </div>
      </main>
    </PageShell>
  )
}