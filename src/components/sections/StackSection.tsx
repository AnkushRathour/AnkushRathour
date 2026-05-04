'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CATEGORIES = [
  {
    title: 'Languages',
    emoji: '⌨️',
    color: '#3b82f6',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash', 'Go (basics)', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    emoji: '🧩',
    color: '#8b5cf6',
    skills: ['Django', 'FastAPI', 'Flask', 'Next.js', 'Celery', 'SQLAlchemy', 'Pydantic', 'Pandas', 'NumPy'],
  },
  {
    title: 'Cloud & DevOps',
    emoji: '☁️',
    color: '#06b6d4',
    skills: ['AWS (Lambda, EC2, S3, RDS, EKS)', 'GCP (Cloud Run, BigQuery)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'AI / ML',
    emoji: '🤖',
    color: '#f59e0b',
    skills: ['OpenAI API', 'Google Gemini', 'LangChain', 'ElevenLabs', 'Twilio', 'Hugging Face', 'RAG Pipelines', 'LLM Fine-tuning', 'LlamaIndex'],
  },
  {
    title: 'Databases & Storage',
    emoji: '🗄️',
    color: '#10b981',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'ChromaDB', 'Pinecone'],
  },
  {
    title: 'Tools & Practices',
    emoji: '🛠️',
    color: '#ef4444',
    skills: ['Git', 'REST API Design', 'GraphQL', 'Microservices', 'System Design', 'TDD', 'Agile/Scrum', 'WebSockets'],
  },
]

export function StackSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="stack"
      ref={ref}
      className="py-24 md:py-32 relative bg-[var(--surface-raised)]"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">02 — Tech Stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
            Tools of the trade
          </h2>
          <p className="text-[var(--ink-muted)] mt-3 max-w-xl mx-auto">
            A curated selection of technologies I use to build reliable, scalable systems.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bento-card glass rounded-2xl p-6 relative z-10"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}20` }}
                >
                  {cat.emoji}
                </span>
                <h3 className="font-semibold text-[var(--ink)] text-sm">{cat.title}</h3>
              </div>

              {/* Accent line */}
              <div
                className="h-px w-full mb-4 opacity-40"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs px-2.5 py-1 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--ink-muted)] font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Proficiency bar summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-mono text-xs text-[var(--ink-faint)] uppercase tracking-widest mb-6">Core Proficiencies</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Python / Django / FastAPI', pct: 96 },
              { name: 'Cloud Architecture (AWS/GCP/Azure)', pct: 88 },
              { name: 'AI / LLM Engineering', pct: 85 },
              { name: 'System Design & Microservices', pct: 90 },
            ].map(({ name, pct }) => (
              <div key={name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--ink-muted)]">{name}</span>
                  <span className="font-mono text-[var(--accent)] text-xs">{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--surface-border)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--accent)' }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
