import dynamic from 'next/dynamic'
import Link from 'next/link'

const HeroTypewriter = dynamic(() => import('@/components/sections/HeroTypewriter').then((m) => m.HeroTypewriter), {
  ssr: false,
  loading: () => (
    <span className="text-[var(--accent)] font-mono">Software Engineer</span>
  ),
})

const BENTO_STATS = [
  { label: 'Years Experience', value: '5+', icon: '⚡' },
  { label: 'PyPI Packages', value: '3+', icon: '📦' },
  { label: 'Cloud Platforms', value: 'AWS·GCP·Azure', icon: '☁️' },
  { label: 'Open Source Projects', value: '10+', icon: '🛠️' },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-24 pb-16"
      aria-label="Hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-400/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="hero-enter hero-enter-delay-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--ink-muted)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="hero-enter hero-enter-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[var(--ink)]">
              Ankush
              <br />
              <span className="gradient-text">Rathour</span>
              <span className="sr-only"> - Software Engineer</span>
            </h1>

            <p className="hero-enter hero-enter-delay-2 text-xl md:text-2xl font-body font-normal text-[var(--ink-muted)] min-h-[2rem]">
              <HeroTypewriter />
            </p>

            <p className="hero-enter hero-enter-delay-3 text-base text-[var(--ink-muted)] max-w-xl leading-relaxed">
              I architect production-grade software systems — from blazing-fast APIs and distributed
              cloud infra to multimodal AI agents. Turning ambitious ideas into deployed realities.
            </p>

            <div className="hero-enter hero-enter-delay-4 flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects/"
                className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="/contact/"
                className="px-6 py-3 rounded-xl border border-[var(--surface-border)] text-[var(--ink-muted)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                Get in Touch
              </Link>
              <a
                href="https://github.com/AnkushRathour"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[var(--surface-border)] text-[var(--ink-muted)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-scale-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full p-[3px] profile-ring" style={{ margin: '-4px' }}>
                <div className="w-full h-full rounded-full bg-[var(--surface)]" />
              </div>
              <div className="absolute inset-0 rounded-full glow-accent opacity-40" aria-hidden="true" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--surface)] shadow-2xl animate-float">
                <picture>
                  <source
                    srcSet="/AnkushRathour-384.webp 384w, /AnkushRathour.webp 512w"
                    sizes="(max-width: 768px) 192px, 256px"
                    type="image/webp"
                  />
                  <img
                    src="/AnkushRathour.jpeg"
                    alt="Ankush Rathour — Software Engineer"
                    width={256}
                    height={256}
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover w-full h-full"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
              </div>
              <div className="hero-badge-in absolute -bottom-2 -right-4 glass px-3 py-1.5 rounded-lg text-xs font-mono text-[var(--ink-muted)] shadow-lg">
                <span className="text-green-400">●</span> Shipping daily
              </div>
            </div>
          </div>
        </div>

        <div className="hero-enter hero-enter-delay-5 mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          {BENTO_STATS.map((stat) => (
            <article
              key={stat.label}
              className="bento-card glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display text-2xl font-bold text-[var(--ink)]">{stat.value}</div>
              <div className="text-xs text-[var(--ink-faint)] mt-1 font-mono">{stat.label}</div>
            </article>
          ))}
        </div>

        <div className="hero-enter hero-enter-delay-6 flex justify-center mt-12">
          <Link
            href="/about/"
            className="flex flex-col items-center gap-2 text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <span className="scroll-chevron w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
              <span className="w-1 h-2 rounded-full bg-current" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}