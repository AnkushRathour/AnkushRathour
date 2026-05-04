'use client'

import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ankush-rathour/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AnkushRathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'PyPI',
    href: 'https://pypi.org/user/ANKUSHRATHOUR/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.654 0c-.612.003-1.197.057-1.722.152C8.151.51 7.797 1.257 7.797 2.308v1.535h3.93v.512H5.54c-1.143 0-2.143.686-2.457 1.99-.363 1.496-.38 2.427 0 3.988.282 1.162.956 1.99 2.099 1.99h1.357v-1.794c0-1.297 1.122-2.441 2.457-2.441h3.924c1.094 0 1.963-.9 1.963-1.998V2.308c0-1.065-.9-1.863-1.963-2.005A14.17 14.17 0 0011.654 0zm-2.113 1.18a.75.75 0 11-.001 1.499.75.75 0 010-1.499zM7.797 5.867h6.378v.013c.025.004.047.014.071.018v1.481c0 1.296-1.1 2.39-2.456 2.39H7.867c-1.076 0-1.963.921-1.963 1.998v3.744c0 1.065.925 1.69 1.963 1.998.244.074.493.107.737.107h3.186c.245 0 .494-.033.737-.107 1.037-.308 1.963-.933 1.963-1.998v-1.535H10.56v-.512h5.687c1.143 0 1.568-.794 1.963-1.99.41-1.237.393-2.428 0-3.987C17.838 6.326 17.24 5.867 16.098 5.867h-1.376v1.794c0 1.297-1.122 2.39-2.457 2.39H8.34c-1.076 0-1.963.9-1.963 1.998v3.744c0 1.065.9 1.863 1.963 2.005a14.17 14.17 0 002.113.152c.612-.003 1.197-.057 1.722-.152 1.782-.357 2.136-1.103 2.136-2.157v-1.535h-3.93v-.512h6.387c1.143 0 2.143-.686 2.457-1.99.363-1.496.38-2.427 0-3.988-.282-1.162-.956-1.99-2.099-1.99h-1.357V6.38c0-1.297-1.122-2.441-2.457-2.441H8.34c-1.094 0-1.963.9-1.963 1.998V7.47h5.604v-.512H7.797V5.867zm5.037 9.088a.75.75 0 110 1.499.75.75 0 010-1.499z" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@ankush.rathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/18736053/ankush-rathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.725 0l-1.72 1.289 6.005 8.126 1.72-1.289L15.725 0zm-3.94 3.418l-1.369 1.648 8.225 6.83 1.369-1.648-8.225-6.83zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.093L6.785 12.743zM6 18h10.615v-2H6V18zm.195 2.02l-.429 2.09 10.497 2.15.43-2.09-10.498-2.15z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Ankush_Rathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ankush_rathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_ankush_rathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Linktree',
    href: 'https://linktr.ee/ankushrathour',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7.953 15.066c-.08.163-.08.324 0 .486l2.994 5.318a.56.56 0 00.970 0l2.995-5.318c.08-.162.08-.323 0-.486l-2.995-5.318a.56.56 0 00-.97 0L7.953 15.066zM12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 21.6C6.729 21.6 2.4 17.271 2.4 12S6.729 2.4 12 2.4 21.6 6.729 21.6 12 17.271 21.6 12 21.6z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--surface-border)] bg-[var(--surface-raised)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-[var(--ink)]">
              Ankush Rathour
            </p>
            <p className="text-sm text-[var(--ink-faint)] mt-1">Software Engineer</p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--ink-faint)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {['About', 'Stack', 'Projects', 'Showcase', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[var(--ink-faint)] hover:text-[var(--accent)] transition-colors animated-underline"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center border-t border-[var(--surface-border)] pt-6 w-full">
            <p className="text-xs text-[var(--ink-faint)]">
              © {new Date().getFullYear()} Ankush Rathour.
            </p>
            <p className="text-xs text-[var(--ink-faint)] mt-1">
              <a
                href="mailto:ankush.14072000.rathour@gmail.com"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Transforming ideas into efficient code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
