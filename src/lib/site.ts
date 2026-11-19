export const SITE_URL = 'https://ankushrathour.com'
export const SITE_NAME = 'Ankush Rathour'
export const SITE_TITLE = 'Ankush Rathour - Software Engineer'
export const DEFAULT_DESCRIPTION =
  'Ankush Rathour — Software Engineer specializing in architecting scalable full-stack solutions and seamless third-party integrations. Creator of AudioMaker, TalkGenie and ChatPDF, AI-powered tools, and Unified Multimodal AI Agents.'

export const NAV_ROUTES = [
  { label: 'About', href: '/about/' },
  { label: 'Stack', href: '/tech-stack/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Showcase', href: '/showcase/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Notes', href: '/engineering-notes/' },
] as const

/** Legacy single-page hash URLs → static export paths */
export const LEGACY_HASH_ROUTES: Record<string, string> = {
  about: '/about/',
  stack: '/tech-stack/',
  projects: '/projects/',
  showcase: '/showcase/',
  contact: '/contact/',
  hero: '/',
}