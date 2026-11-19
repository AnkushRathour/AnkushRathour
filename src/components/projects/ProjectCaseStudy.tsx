import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/lib/projects'

type Props = { project: Project }

export function ProjectCaseStudy({ project }: Props) {
  return (
    <article className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/projects/"
          className="text-sm font-mono text-[var(--accent)] hover:underline mb-8 inline-block"
        >
          ← All projects
        </Link>

        <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">Case study</p>
        <div className="flex items-start gap-4 mb-6">
          <span className="text-4xl" aria-hidden>
            {project.emoji}
          </span>
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">{project.name}</h1>
            <p className="text-[var(--accent)] font-mono text-sm mt-2">{project.tagline}</p>
            <p className="text-[var(--ink-faint)] text-sm mt-1">Role: {project.role}</p>
          </div>
        </div>

        <p className="text-[var(--ink-muted)] text-lg leading-relaxed mb-10">{project.description}</p>

        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] mb-3">Problem</h2>
          <p className="text-[var(--ink-muted)] leading-relaxed">{project.problem}</p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] mb-3">Approach</h2>
          <ul className="space-y-2 text-[var(--ink-muted)] list-disc pl-5">
            {project.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] mb-3">Outcomes</h2>
          <ul className="space-y-2">
            {project.outcomes.map((item) => (
              <li
                key={item}
                className="text-sm text-[var(--ink-muted)] px-3 py-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)]"
              >
                ✓ {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--ink-faint)] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--surface-border)]">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] hover:text-[var(--accent)] font-mono"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.links.pypi && (
            <a
              href={project.links.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] hover:text-[var(--accent)] font-mono"
            >
              <ExternalLink className="w-4 h-4" />
              PyPI
            </a>
          )}
        </div>
      </div>
    </article>
  )
}