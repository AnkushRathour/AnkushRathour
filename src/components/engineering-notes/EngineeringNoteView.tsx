import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import type { EngineeringNoteMeta } from '@/lib/engineering-notes'
import { SITE_URL } from '@/lib/site'

type Props = {
  note: EngineeringNoteMeta
  body: string
}

export function EngineeringNoteView({ note, body }: Props) {
  const canonical = note.externalUrl ?? `${SITE_URL}/engineering-notes/${note.slug}/`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    description: note.description,
    datePublished: note.publishedAt,
    dateModified: note.updatedAt ?? note.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Ankush Rathour',
      url: SITE_URL,
    },
    mainEntityOfPage: canonical,
    ...(note.externalUrl
      ? { isBasedOn: note.externalUrl, url: note.externalUrl }
      : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Engineering Notes', path: '/engineering-notes/' },
          { name: note.title, path: `/engineering-notes/${note.slug}/` },
        ]}
      />
      <PageShell>
        <main className="py-28 md:py-36">
          <article className="max-w-3xl mx-auto px-6">
            <Link
              href="/engineering-notes/"
              className="text-sm text-[var(--accent)] hover:underline font-mono"
            >
              ← All notes
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] mt-6">
              {note.title}
            </h1>
            <p className="text-sm font-mono text-[var(--ink-muted)] mt-3">
              {note.publishedAt}
              {note.updatedAt ? ` · updated ${note.updatedAt}` : ''}
              {' · '}
              {note.readingTimeMinutes} min read
              {note.source === 'medium' ? ' · Medium' : ''}
            </p>
            {note.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tags">
                {note.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded-md border border-[var(--surface-border)] text-[var(--ink-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {note.externalUrl ? (
              <ExternalArticleBlock note={note} body={body} />
            ) : (
              <div className="mt-10 glass rounded-2xl p-6 md:p-8">
                <pre className="code-block whitespace-pre-wrap text-[var(--ink-muted)] leading-relaxed">
                  {body.trim()}
                </pre>
              </div>
            )}
          </article>
        </main>
      </PageShell>
    </>
  )
}

function ExternalArticleBlock({ note, body }: Props) {
  return (
    <div className="mt-10 space-y-6">
      <p className="text-[var(--ink-muted)] leading-relaxed">{note.description}</p>
      <div className="glass rounded-2xl p-6 md:p-8">
        <p className="text-[var(--ink-muted)] leading-relaxed whitespace-pre-wrap">{body.trim()}</p>
      </div>
      <a
        href={note.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Read full article on Medium ↗
      </a>
    </div>
  )
}
