/**
 * Lighthouse CI thresholds (override with LHCI_MIN_* env vars).
 */
const perf = Number(process.env.LHCI_MIN_PERFORMANCE || 0.85)
const a11y = Number(process.env.LHCI_MIN_ACCESSIBILITY || 0.95)
const bp = Number(process.env.LHCI_MIN_BEST_PRACTICES || 0.95)
const seo = Number(process.env.LHCI_MIN_SEO || 0.95)

const ROUTES = ['/', '/about/', '/tech-stack/', '/projects/', '/showcase/', '/contact/']

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx serve out -l 4173',
      startServerReadyPattern: 'Accepting connections',
      url: ROUTES.map((path) => `http://127.0.0.1:4173${path}`),
      numberOfRuns: 1,
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: perf }],
        'categories:accessibility': ['error', { minScore: a11y }],
        'categories:best-practices': ['warn', { minScore: bp }],
        'categories:seo': ['error', { minScore: seo }],
      },
    },
  },
}