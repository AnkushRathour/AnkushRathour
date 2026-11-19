import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const configPath = path.join(root, 'content/youtube.config.json')
const outPath = path.join(root, 'content/youtube-videos.json')

function loadConfig() {
  if (!fs.existsSync(configPath)) return null
  return JSON.parse(fs.readFileSync(configPath, 'utf8'))
}

function guessType(title) {
  const t = title.toLowerCase()
  if (t.includes('#short') || t.includes('shorts')) return 'short'
  return 'video'
}

function parseRss(xml) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
  return entries.map((match) => {
    const block = match[1]
    const id = block.match(/<yt:videoId>([^<]+)</)?.[1]
    const title = block.match(/<title>([^<]+)</)?.[1]
    const published = block.match(/<published>([^<]+)</)?.[1]
    if (!id || !title) return null
    return {
      id,
      title: title.replace(/&amp;/g, '&').replace(/&#39;/g, "'"),
      publishedAt: published ? published.slice(0, 10) : '',
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      type: guessType(title),
    }
  }).filter(Boolean)
}

const config = loadConfig()
const channelId = process.env.YOUTUBE_CHANNEL_ID || config?.channelId

if (!channelId) {
  console.log('YouTube sync skipped (set channelId in content/youtube.config.json or YOUTUBE_CHANNEL_ID).')
  process.exit(0)
}

const maxItems = config?.maxItems ?? 8
const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`

const res = await fetch(feedUrl)
if (!res.ok) {
  console.warn(`YouTube RSS fetch failed: ${res.status}`)
  process.exit(0)
}

const xml = await res.text()
const videos = parseRss(xml).slice(0, maxItems)

fs.writeFileSync(outPath, JSON.stringify({ videos, syncedAt: new Date().toISOString() }, null, 2))
console.log(`Synced ${videos.length} YouTube video(s).`)