import type { MetadataRoute } from 'next'
import { getAllEngineeringNotes } from '@/lib/engineering-notes'
import { SITE_URL } from '@/lib/site'

const STATIC_PATHS = [
  '',
  'about',
  'tech-stack',
  'projects',
  'showcase',
  'contact',
  'engineering-notes',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticEntries = STATIC_PATHS.map((segment) => ({
    url: segment ? `${SITE_URL}/${segment}/` : `${SITE_URL}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: segment === '' ? 1 : 0.8,
  }))

  const notes = getAllEngineeringNotes().map((note) => ({
    url: `${SITE_URL}/engineering-notes/${note.slug}/`,
    lastModified: new Date(note.updatedAt ?? note.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...notes]
}