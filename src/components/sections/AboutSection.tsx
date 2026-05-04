'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EXPERTISE = [
  { area: 'Backend Engineering', desc: 'Python · Django · FastAPI · REST APIs · GraphQL · Celery · Redis' },
  { area: 'Cloud & DevOps', desc: 'AWS · GCP · Azure · Docker · Kubernetes · CI/CD · Ngnix' },
  { area: 'AI & Machine Learning', desc: 'OpenAI · Gemini · LangChain · ElevenLabs · RAG · LLM Pipelines' },
  { area: 'Data & Databases', desc: 'PostgreSQL · MongoDB · Redis · Elasticsearch · Pandas · NumPy' },
]

const TIMELINE = [
  { year: '2024–Present', role: 'Senior Software Engineer', org: 'AI-focused product company', note: 'Building multimodal AI agents & production ML systems' },
  { year: '2021–2024', role: 'Software Engineer', org: 'SaaS Platform', note: 'Scaled Django/FastAPI backend to 10M+ requests/day on AWS' },
  { year: '2020–2021', role: 'Python Intern', org: 'Startup Ecosystem', note: 'Designed microservices architecture, cloud infra & data pipelines' },
]

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">01 — About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
            Engineering at the intersection of
            <span className="gradient-text"> scale & intelligence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16">
          {/* Left — Bio */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--ink-muted)] text-lg leading-relaxed"
            >
              I&apos;m <strong className="text-[var(--ink)] font-semibold">Ankush Rathour</strong>, a Software Engineer specializing 
              in architecting scalable full-stack solutions and seamless third-party integrations. I bridge the gap between complex 
              backend logic and intuitive frontend experiences. My expertise lies in building AI-driven workflows,
              real-time communication systems, and enterprise CRM connectors
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--ink-muted)] leading-relaxed"
            >
              I specialize in <strong className="text-[var(--accent)]">Python ecosystems</strong> — crafting 
              everything from blazing-fast FastAPI microservices to Django monoliths handling millions of requests. 
              On the cloud side, I&apos;ve architected solutions across AWS, GCP, and Azure. My open-source work includes 
              the <strong className="text-[var(--ink)] font-semibold">AudioMaker</strong> PyPI package, enabling 
              programmatic audio generation at scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--ink-muted)] leading-relaxed"
            >
              Currently obsessed with the convergence of voice AI and messaging platforms — building systems where 
              LLMs don&apos;t just generate text, but orchestrate real-time telephony, voice synthesis, and multimodal 
              reasoning pipelines.
            </motion.p>

            {/* Expertise grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-3 pt-4"
            >
              {EXPERTISE.map(({ area, desc }) => (
                <article key={area} className="bento-card glass rounded-xl p-4 relative z-10">
                  <h3 className="text-sm font-semibold text-[var(--ink)] mb-1">{area}</h3>
                  <p className="text-xs text-[var(--ink-faint)] font-mono leading-relaxed">{desc}</p>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-mono text-[var(--ink-faint)] uppercase tracking-widest mb-6">
              Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--surface-border)] to-transparent" />

              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="pl-8 relative"
                  >
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      i === 0
                        ? 'border-[var(--accent)] bg-[var(--accent-muted)]'
                        : 'border-[var(--surface-border)] bg-[var(--surface)]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--accent)]' : 'bg-[var(--surface-border)]'}`} />
                    </div>

                    <p className="font-mono text-xs text-[var(--accent)] mb-0.5">{item.year}</p>
                    <p className="font-semibold text-[var(--ink)] text-sm">{item.role}</p>
                    <p className="text-xs text-[var(--ink-muted)]">{item.org}</p>
                    <p className="text-xs text-[var(--ink-faint)] mt-1 leading-relaxed">{item.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
