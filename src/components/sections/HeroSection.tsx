'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const TYPED_STRINGS = [
  'Software Engineer',
  'Python Architect',
  'AI Systems Builder',
  'Cloud Specialist',
]

function TypewriterText() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting && subIndex === TYPED_STRINGS[index].length) {
      setTimeout(() => setDeleting(true), 1800)
      return
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % TYPED_STRINGS.length)
      return
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 80
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index])

  return (
    <span className="text-[var(--accent)] font-mono">
      {TYPED_STRINGS[index].substring(0, subIndex)}
      <span className="cursor-blink ml-0.5">|</span>
    </span>
  )
}

const BENTO_STATS = [
  { label: 'Years Experience', value: '5+', icon: '⚡' },
  { label: 'PyPI Packages', value: '3+', icon: '📦' },
  { label: 'Cloud Platforms', value: 'AWS·GCP·Azure', icon: '☁️' },
  { label: 'Open Source Projects', value: '10+', icon: '🛠️' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-24 pb-16"
      aria-label="Hero"
    >
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-400/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--ink-muted)]"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[var(--ink)]"
            >
              Ankush
              <br />
              <span className="gradient-text">Rathour</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl font-body font-light text-[var(--ink-muted)] min-h-[2rem]"
            >
              <TypewriterText />
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base text-[var(--ink-muted)] max-w-xl leading-relaxed"
            >
              I architect production-grade software systems — from blazing-fast APIs and distributed 
              cloud infra to multimodal AI agents. Turning ambitious ideas into deployed realities.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-[var(--surface-border)] text-[var(--ink-muted)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/AnkushRathour"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[var(--surface-border)] text-[var(--ink-muted)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full p-[3px] profile-ring" style={{ margin: '-4px' }}>
                <div className="w-full h-full rounded-full bg-[var(--surface)]" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full glow-accent opacity-40" />

              {/* Profile image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--surface)] shadow-2xl animate-float">
                <Image
                  src="https://ankushrathour.com/assets/img/AnkushRathour.jpeg"
                  alt="Ankush Rathour — Software Engineer"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 -right-4 glass px-3 py-1.5 rounded-lg text-xs font-mono text-[var(--ink-muted)] shadow-lg"
              >
                <span className="text-green-400">●</span> Shipping daily
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bento Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {BENTO_STATS.map((stat, i) => (
            <article
              key={stat.label}
              className="bento-card glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display text-2xl font-bold text-[var(--ink)]">{stat.value}</div>
              <div className="text-xs text-[var(--ink-faint)] mt-1 font-mono">{stat.label}</div>
            </article>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-[var(--ink-faint)] hover:text-[var(--accent)] transition-colors">
            <span className="text-xs font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-current" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
