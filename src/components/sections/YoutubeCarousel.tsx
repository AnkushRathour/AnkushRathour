'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { YoutubeVideo } from '@/lib/youtube'

type Props = {
  videos: YoutubeVideo[]
  channelUrl: string
}

const CARD_WIDTH = 300

export function YoutubeCarousel({ videos, channelUrl }: Props) {
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (direction: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    const offset = direction === 'next' ? CARD_WIDTH + 16 : -(CARD_WIDTH + 16)
    track.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-24 relative border-t border-[var(--surface-border)] bg-[var(--surface-raised)]"
      aria-labelledby="youtube-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
              YouTube
            </p>
            <h2 id="youtube-heading" className="font-display text-2xl md:text-3xl font-bold text-[var(--ink)]">
              Recent uploads
            </h2>
          </div>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[var(--surface-border)] text-sm font-semibold text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shrink-0"
          >
            Subscribe on YouTube ↗
          </a>
        </div>

        <div className="relative group/carousel">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-4 w-12 z-10 bg-gradient-to-r from-[var(--surface-raised)] to-transparent hidden sm:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-4 w-12 z-10 bg-gradient-to-l from-[var(--surface-raised)] to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={() => scroll('prev')}
            className="absolute left-0 top-[calc(50%-2.5rem)] -translate-y-1/2 z-20 w-10 h-10 rounded-full glass border border-[var(--surface-border)] flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors shadow-lg opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('next')}
            className="absolute right-0 top-[calc(50%-2.5rem)] -translate-y-1/2 z-20 w-10 h-10 rounded-full glass border border-[var(--surface-border)] flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors shadow-lg opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Next videos"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <ul
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Recent YouTube uploads"
          >
            {videos.map((video) => (
              <li key={video.id} className="snap-start shrink-0 w-[min(85vw,300px)] sm:w-[300px]">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-card glass flex flex-col h-full rounded-2xl overflow-hidden border border-[var(--surface-border)] hover:border-[var(--accent)]/50 transition-all hover:-translate-y-0.5"
                >
                  <div className="relative w-full aspect-video bg-[var(--surface)] shrink-0">
                    <Image
                      src={video.thumbnail}
                      alt=""
                      width={480}
                      height={270}
                      loading="lazy"
                      unoptimized
                      className="object-cover w-full h-full"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded-md bg-black/70 text-white">
                      {video.type === 'short' ? 'Short' : 'Video'}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col min-h-[5.5rem]">
                    <p className="text-sm font-semibold text-[var(--ink)] line-clamp-2 leading-snug">
                      {video.title}
                    </p>
                    {video.publishedAt ? (
                      <p className="text-xs font-mono text-[var(--ink-muted)] mt-auto pt-2">{video.publishedAt}</p>
                    ) : null}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}