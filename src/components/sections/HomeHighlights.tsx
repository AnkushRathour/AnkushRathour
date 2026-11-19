import Link from 'next/link'

const HIGHLIGHTS = [
  {
    title: 'About',
    href: '/about/',
    description:
      'Background in production-grade APIs, cloud infrastructure, and AI-powered products.',
    icon: '01',
  },
  {
    title: 'Tech Stack',
    href: '/tech-stack/',
    description: 'Python, FastAPI, Django, React, Next.js, AWS, GCP, Azure, and LLM tooling.',
    icon: '02',
  },
  {
    title: 'Projects',
    href: '/projects/',
    description: 'AudioMaker, GoogleMapsScraper, ChatPDF, and other shipped engineering work.',
    icon: '03',
  },
  {
    title: 'Technical Showcase',
    href: '/showcase/',
    description: 'Unified multimodal AI agent architecture from chat to live voice telephony.',
    icon: '04',
  },
  {
    title: 'Contact',
    href: '/contact/',
    description: 'Reach out via email, LinkedIn, GitHub, and other professional profiles.',
    icon: '05',
  },
  {
    title: 'Engineering Notes',
    href: '/engineering-notes/',
    description: 'Technical articles from real engineering work — published when ready.',
    icon: '06',
  },
]

export function HomeHighlights() {
  return (
    <section
      className="py-24 md:py-32 relative content-visibility-auto"
      aria-labelledby="highlights-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">
            Explore
          </p>
          <h2
            id="highlights-heading"
            className="font-display text-3xl md:text-4xl font-bold text-[var(--ink)]"
          >
            Portfolio highlights
          </h2>
          <p className="text-[var(--ink-muted)] mt-3 max-w-2xl">
            The full single-page experience is now organized into focused pages — same content and
            design, easier to navigate and index.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIGHLIGHTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bento-card glass rounded-2xl p-6 block hover:-translate-y-1 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <span className="font-mono text-xs text-[var(--accent)]">{item.icon}</span>
              <h3 className="font-display text-xl font-bold text-[var(--ink)] mt-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--ink-muted)] mt-2 leading-relaxed">
                {item.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-[var(--accent)]">
                View page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}