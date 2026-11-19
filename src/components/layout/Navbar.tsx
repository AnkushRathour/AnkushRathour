'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react'
import { NAV_ROUTES } from '@/lib/site'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/AnkushRathour', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankush-rathour/', icon: LinkedInIcon },
  { label: 'X', href: 'https://x.com/Ankush_Rathour', icon: XIcon },
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function normalizePath(path: string) {
  if (path === '/') return '/'
  return path.endsWith('/') ? path : `${path}/`
}

function isActiveRoute(pathname: string, href: string) {
  const current = normalizePath(pathname)
  const target = normalizePath(href)
  if (target === '/') return current === '/'
  return current === target || current.startsWith(target)
}

const THEME_CYCLE = ['dark', 'light', 'system'] as const

function nextTheme(current: string | undefined): (typeof THEME_CYCLE)[number] {
  const idx = THEME_CYCLE.indexOf((current ?? 'system') as (typeof THEME_CYCLE)[number])
  const safeIdx = idx === -1 ? 0 : idx
  return THEME_CYCLE[(safeIdx + 1) % THEME_CYCLE.length]
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-8 h-8" aria-hidden="true" />

  const current = theme ?? 'system'
  const upNext = nextTheme(theme)
  const CurrentIcon = current === 'dark' ? Moon : current === 'light' ? Sun : Monitor
  const label =
    current === 'dark' ? 'Dark' : current === 'light' ? 'Light' : 'System'
  const nextLabel = upNext === 'dark' ? 'Dark' : upNext === 'light' ? 'Light' : 'System'

  return (
    <button
      type="button"
      onClick={() => setTheme(upNext)}
      className="p-2 rounded-lg border border-[var(--surface-border)] hover:border-[var(--accent)] transition-colors text-[var(--ink-muted)] hover:text-[var(--accent)]"
      aria-label={`Theme: ${label}. Activate ${nextLabel} theme.`}
    >
      <CurrentIcon className="w-4 h-4" aria-hidden="true" />
    </button>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/5 dark:shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          aria-label="Ankush Rathour — Software Engineer home"
          className="font-display text-lg font-bold text-[var(--ink)] hover:text-[var(--accent)] transition-colors rounded-full"
        >
          <Image
            src="/AnkushRathour.jpeg"
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium animated-underline transition-colors ${
              pathname === '/' ? 'text-[var(--accent)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            Home
          </Link>
          {NAV_ROUTES.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium animated-underline transition-colors ${
                isActiveRoute(pathname, href)
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 mr-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>

          <ThemeSwitcher />

          <button
            type="button"
            className="md:hidden p-2 text-[var(--ink-muted)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden glass border-t border-[var(--surface-border)] overflow-hidden transition-all duration-200 ${
          mobileOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          <Link href="/" className="text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--accent)] py-1">
            Home
          </Link>
          {NAV_ROUTES.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium py-1 transition-colors ${
                isActiveRoute(pathname, href)
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--ink-muted)] hover:text-[var(--accent)]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}