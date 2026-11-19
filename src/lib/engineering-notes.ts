import fs from 'fs'
import path from 'path'

export type EngineeringNoteMeta = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  readingTimeMinutes: number
  /** Full article hosted elsewhere (e.g. Medium); portfolio page is a summary + link */
  externalUrl?: string
  source?: 'medium' | 'external'
}

const CONTENT_DIR = path.join(process.cwd(), 'content/engineering-notes')

function parseFrontmatter(raw: string): {
  meta: Record<string, string>
  body: string
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = value
  }
  return { meta, body: match[2] }
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export function getAllEngineeringNotes(): EngineeringNoteMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith('.md') && name.toLowerCase() !== 'readme.md')

  const notes: EngineeringNoteMeta[] = []

  for (const filename of files) {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8')
    const { meta, body } = parseFrontmatter(raw)
    if (!meta.title || !meta.publishedAt) continue

    notes.push({
      slug,
      title: meta.title,
      description: meta.description ?? '',
      publishedAt: meta.publishedAt,
      updatedAt: meta.updatedAt,
      tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      readingTimeMinutes: meta.readingTimeMinutes
        ? Number(meta.readingTimeMinutes)
        : estimateReadingTime(body),
      externalUrl: meta.externalUrl,
      source: meta.source === 'medium' ? 'medium' : meta.externalUrl ? 'external' : undefined,
    })
  }

  return notes.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getEngineeringNoteBySlug(slug: string): {
  meta: EngineeringNoteMeta
  body: string
} | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { meta, body } = parseFrontmatter(raw)
  if (!meta.title || !meta.publishedAt) return null

  const note: EngineeringNoteMeta = {
    slug,
    title: meta.title,
    description: meta.description ?? '',
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    readingTimeMinutes: meta.readingTimeMinutes
      ? Number(meta.readingTimeMinutes)
      : estimateReadingTime(body),
    externalUrl: meta.externalUrl,
    source: meta.source === 'medium' ? 'medium' : meta.externalUrl ? 'external' : undefined,
  }

  return { meta: note, body }
}