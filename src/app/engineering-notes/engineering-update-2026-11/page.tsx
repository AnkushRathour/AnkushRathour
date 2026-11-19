import { EngineeringNoteView } from '@/components/engineering-notes/EngineeringNoteView'
import { getEngineeringNoteBySlug } from '@/lib/engineering-notes'
import { createPageMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'engineering-update-2026-11'

export const metadata = (() => {
  const article = getEngineeringNoteBySlug(SLUG)
  if (!article) return {}
  return createPageMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/engineering-notes/${SLUG}/`,
    ogType: 'article',
    canonicalUrl: article.meta.externalUrl,
  })
})()

export default function EngineeringNotePage() {
  const article = getEngineeringNoteBySlug(SLUG)
  if (!article) notFound()
  return <EngineeringNoteView note={article.meta} body={article.body} />
}
