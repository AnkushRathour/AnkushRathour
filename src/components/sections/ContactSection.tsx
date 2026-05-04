'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, ExternalLink } from 'lucide-react'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'ankush.14072000.rathour@gmail.com',
    href: 'mailto:ankush.14072000.rathour@gmail.com',
    icon: <Mail className="w-4 h-4" />,
    color: '#ef4444',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ankush-rathour',
    href: 'https://www.linkedin.com/in/ankush-rathour/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'github.com/AnkushRathour',
    href: 'https://github.com/AnkushRathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#6e7681',
  },
  {
    label: 'Linktree',
    value: 'linktr.ee/ankushrathour',
    href: 'https://linktr.ee/ankushrathour',
    icon: <ExternalLink className="w-4 h-4" />,
    color: '#39e09b',
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">05 — Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
              Let&apos;s build something
              <span className="gradient-text"> remarkable</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--ink-muted)] text-lg leading-relaxed mb-12"
          >
            Whether you&apos;re looking to hire a backend engineer, collaborate on AI projects, 
            discuss open-source, or just want to geek out about LLMs and distributed systems — 
            my inbox is always open.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <a
              href="mailto:ankush.14072000.rathour@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--accent)] text-white font-semibold text-lg hover:opacity-90 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </motion.div>

          {/* Location note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-2 text-sm text-[var(--ink-faint)] mb-12"
          >
            <MapPin className="w-4 h-4" />
            Based in India · Open to remote, hybrid & relocation
          </motion.div>

          {/* Contact links grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-3 text-left"
          >
            {CONTACT_LINKS.map(({ label, value, href, icon, color }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="bento-card glass rounded-xl p-4 flex items-center gap-3 hover:border-[var(--accent)] transition-all duration-200 group relative z-10"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: `${color}20`, color }}
                >
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[var(--ink-faint)] font-mono">{label}</p>
                  <p className="text-sm text-[var(--ink)] font-medium truncate group-hover:text-[var(--accent)] transition-colors">
                    {value}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--ink-faint)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
