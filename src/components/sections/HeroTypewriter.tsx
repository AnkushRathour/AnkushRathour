'use client'

import { useEffect, useState } from 'react'

const TYPED_STRINGS = [
  'Software Engineer',
  'Python Architect',
  'AI Systems Builder',
  'Cloud Specialist',
]

export function HeroTypewriter() {
  const [enabled, setEnabled] = useState(false)
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const start = () => setEnabled(true)
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(start, { timeout: 3500 })
      return () => window.cancelIdleCallback(id)
    }
    const timeout = setTimeout(start, 2500)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!enabled) return

    if (!deleting && subIndex === TYPED_STRINGS[index].length) {
      const pause = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(pause)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % TYPED_STRINGS.length)
      return
    }

    const tick = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 80
    )
    return () => clearTimeout(tick)
  }, [subIndex, deleting, index, enabled])

  const displayText = enabled ? TYPED_STRINGS[index].substring(0, subIndex) : 'Software Engineer'

  return (
    <span className="text-[var(--accent)] font-mono">
      {displayText}
      {enabled ? <span className="cursor-blink ml-0.5">|</span> : null}
    </span>
  )
}