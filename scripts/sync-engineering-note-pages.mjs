import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content/engineering-notes')
const appNotesDir = path.join(root, 'src/app/engineering-notes')

function listNoteSlugs() {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((name) => name.endsWith('.md') && name.toLowerCase() !== 'readme.md')
    .map((name) => name.replace(/\.md$/, ''))
}

const slugs = listNoteSlugs()

for (const entry of fs.readdirSync(appNotesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue
  if (entry.name === 'page.tsx' || entry.name.startsWith('[')) continue
  const full = path.join(appNotesDir, entry.name)
  if (!slugs.includes(entry.name)) {
    fs.rmSync(full, { recursive: true, force: true })
    console.log(`Removed stale note route: ${entry.name}`)
  }
}

const pageTemplate = (slug) => `import { EngineeringNoteView } from '@/components/engineering-notes/EngineeringNoteView'
import { getEngineeringNoteBySlug } from '@/lib/engineering-notes'
import { createPageMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = '${slug}'

export const metadata = (() => {
  const article = getEngineeringNoteBySlug(SLUG)
  if (!article) return {}
  return createPageMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: \`/engineering-notes/\${SLUG}/\`,
    ogType: 'article',
    canonicalUrl: article.meta.externalUrl,
  })
})()

export default function EngineeringNotePage() {
  const article = getEngineeringNoteBySlug(SLUG)
  if (!article) notFound()
  return <EngineeringNoteView note={article.meta} body={article.body} />
}
`

for (const slug of slugs) {
  const routeDir = path.join(appNotesDir, slug)
  fs.mkdirSync(routeDir, { recursive: true })
  fs.writeFileSync(path.join(routeDir, 'page.tsx'), pageTemplate(slug))
  console.log(`Synced note route: /engineering-notes/${slug}/`)
}

if (slugs.length === 0) {
  console.log('No engineering note articles to sync.')
}