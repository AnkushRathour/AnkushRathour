import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { getAllEngineeringNotes } from '@/lib/engineering-notes'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Engineering Notes',
  description:
    'Technical articles and engineering notes from Ankush Rathour.',
  path: '/engineering-notes/',
})

export default function EngineeringNotesPage() {
  const notes = getAllEngineeringNotes()

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Engineering Notes', path: '/engineering-notes/' },
        ]}
      />
      <PageShell>
        <main className="py-28 md:py-36">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">
              Engineering Notes
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
              Writing from real engineering work
            </h1>

            {notes.length === 0 ? (
              <p className="text-[var(--ink-muted)] mt-6">New articles will appear here.</p>
            ) : (
              <ul className="mt-12 space-y-4">
                {notes.map((note) => (
                  <li key={note.slug}>
                    <Link
                      href={`/engineering-notes/${note.slug}/`}
                      className="bento-card glass block rounded-2xl p-6 hover:-translate-y-0.5 transition-transform"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-xl font-bold text-[var(--ink)]">
                          {note.title}
                        </h2>
                        {note.source === 'medium' ? (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-md border border-[var(--surface-border)] text-[var(--accent)]">
                            Medium
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm text-[var(--ink-muted)] mt-2">{note.description}</p>
                      <p className="text-xs font-mono text-[var(--ink-faint)] mt-3">
                        {note.publishedAt} · {note.readingTimeMinutes} min read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </PageShell>
    </>
  )
}