'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'

export function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">03 — Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
            Things I&apos;ve built
          </h2>
          <p className="text-[var(--ink-muted)] mt-3 max-w-xl">
            Open-source tools, AI experiments, and production systems — with deeper{' '}
            <span className="text-[var(--ink)]">case studies</span> for flagship work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bento-card rounded-2xl p-6 flex flex-col relative z-10 border transition-all duration-300 ${
                project.highlight
                  ? 'border-[var(--accent)] bg-[var(--accent-muted)] hover:shadow-xl hover:shadow-blue-500/10'
                  : 'border-[var(--surface-border)] bg-[var(--surface-raised)] hover:border-[var(--accent)]/40'
              }`}
            >
              {project.highlight && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[var(--accent)] text-white text-xs font-mono">
                  Featured
                </div>
              )}

              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--ink)]">{project.name}</h3>
                  <p className="text-xs text-[var(--accent)] font-mono mt-0.5">{project.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-1">{project.description}</p>

              <div className="my-4 px-3 py-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] text-xs font-mono text-[var(--ink-faint)]">
                ✓ {project.stat}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--ink-faint)] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[var(--surface-border)]">
                <Link
                  href={`/projects/${project.slug}/`}
                  className="text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  Read case study →
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors font-mono ml-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    PyPI
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/AnkushRathour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--surface-border)] text-sm text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 font-mono"
          >
            <Github className="w-4 h-4" />
            View all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}