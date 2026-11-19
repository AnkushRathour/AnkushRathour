import fs from 'fs'
import path from 'path'
import { YOUTUBE_CHANNEL_URL } from '@/lib/site'

export type YoutubeVideo = {
  id: string
  title: string
  publishedAt: string
  url: string
  thumbnail: string
  type: 'video' | 'short'
}

const DATA_PATH = path.join(process.cwd(), 'content/youtube-videos.json')
const CONFIG_PATH = path.join(process.cwd(), 'content/youtube.config.json')

export function getYoutubeChannelUrl(): string {
  if (!fs.existsSync(CONFIG_PATH)) return YOUTUBE_CHANNEL_URL
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) as { channelUrl?: string }
  return config.channelUrl ?? YOUTUBE_CHANNEL_URL
}

export function getYoutubeVideos(): YoutubeVideo[] {
  if (!fs.existsSync(DATA_PATH)) return []
  const raw = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8')) as {
    videos?: YoutubeVideo[]
  }
  const videos = raw.videos ?? []
  return videos.map((v) => ({
    ...v,
    type: v.type === 'short' ? 'short' : 'video',
  }))
}