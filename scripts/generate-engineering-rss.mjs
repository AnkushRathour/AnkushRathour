import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content/engineering-notes')
const outPath = path.join(root, 'public/engineering-notes-feed.xml')
const siteUrl = 'https://ankushrathour.com'

function parseNotes() {
  if (!fs.existsSync(contentDir)) return []
  const items = []
  for (const name of fs.readdirSync(contentDir)) {
    if (!name.endsWith('.md') || name.toLowerCase() === 'readme.md') continue
    const slug = name.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(contentDir, name), 'utf8')
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
    if (!m) continue
    const meta = {}
    for (const line of m[1].split('\n')) {
      const idx = line.indexOf(':')
      if (idx === -1) continue
      meta[line.slice(0, idx).trim()] = line
        .slice(idx + 1)
        .trim()
        .replace(/^["']|["']$/g, '')
    }
    if (!meta.title || !meta.publishedAt) continue
  if (meta.tags && meta.tags.includes('release-notes')) continue
    items.push({
      slug,
      title: meta.title,
      description: meta.description || '',
      publishedAt: meta.publishedAt,
    })
  }
  return items.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

const notes = parseNotes()
const updated = new Date().toUTCString()
const channel = `
  <title>Engineering Notes — Ankush Rathour</title>
  <link>${siteUrl}/engineering-notes/</link>
  <description>Technical write-ups from ankushrathour.com</description>
  <language>en-us</language>
  <lastBuildDate>${updated}</lastBuildDate>`

const items = notes
  .map(
    (n) => `
  <item>
    <title>${escapeXml(n.title)}</title>
    <link>${siteUrl}/engineering-notes/${n.slug}/</link>
    <guid isPermaLink="true">${siteUrl}/engineering-notes/${n.slug}/</guid>
    <pubDate>${new Date(n.publishedAt).toUTCString()}</pubDate>
    <description>${escapeXml(n.description)}</description>
  </item>`
  )
  .join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>${channel}${items}
</channel>
</rss>
`

fs.writeFileSync(outPath, xml.trim() + '\n')
console.log(`Wrote RSS with ${notes.length} note(s).`)

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}