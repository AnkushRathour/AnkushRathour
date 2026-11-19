import type { MetadataRoute } from 'next'
import { getAllEngineeringNotes } from '@/lib/engineering-notes'
import { getAllProjectSlugs } from '@/lib/projects'
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

function isIndexableNote(tags: string[]) {
  return !tags.includes('release-notes')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((segment) => ({
    url: segment ? `${SITE_URL}/${segment}/` : `${SITE_URL}/`,
    changeFrequency: 'monthly',
    priority: segment === '' ? 1 : 0.8,
  }))

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${SITE_URL}/projects/${slug}/`,
    changeFrequency: 'yearly',
    priority: 0.75,
  }))

  const notes = getAllEngineeringNotes()
    .filter((note) => isIndexableNote(note.tags))
    .map((note) => ({
      url: `${SITE_URL}/engineering-notes/${note.slug}/`,
      lastModified: new Date(note.updatedAt ?? note.publishedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }))

  return [...staticEntries, ...projectEntries, ...notes]
}