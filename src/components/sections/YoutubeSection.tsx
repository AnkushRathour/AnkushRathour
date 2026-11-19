import { YoutubeCarousel } from '@/components/sections/YoutubeCarousel'
import { getYoutubeChannelUrl, getYoutubeVideos } from '@/lib/youtube'

export function YoutubeSection() {
  const videos = getYoutubeVideos()
  const channelUrl = getYoutubeChannelUrl()
  if (videos.length === 0) return null

  return <YoutubeCarousel videos={videos} channelUrl={channelUrl} />
}