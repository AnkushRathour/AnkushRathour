import { EngineeringNoteView } from '@/components/engineering-notes/EngineeringNoteView'
import { getEngineeringNoteBySlug } from '@/lib/engineering-notes'
import { createPageMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'snowflake-csv-upload-python'

export const metadata = (() => {
  const article = getEngineeringNoteBySlug(SLUG)
  if (!article) return {}
  const noIndex = article.meta.tags.includes('release-notes')
  return createPageMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/engineering-notes/${SLUG}/`,
    ogType: 'article',
    canonicalUrl: article.meta.externalUrl,
    noIndex,
  })
})()

export default function EngineeringNotePage() {
  const article = getEngineeringNoteBySlug(SLUG)
  if (!article) notFound()
  return <EngineeringNoteView note={article.meta} body={article.body} />
}
