import type { Metadata } from 'next'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from './site'

type PageMetaInput = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'profile'
  /** When the canonical article lives off-site (e.g. Medium) */
  canonicalUrl?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
}: PageMetaInput): Metadata {
  const pageUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const canonical = canonicalUrl ?? pageUrl
  const isHome = path === '/' || path === ''
  return {
    title: isHome ? { absolute: SITE_TITLE } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: pageUrl,
      title: isHome ? SITE_TITLE : `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/AnkushRathour.jpeg`,
          width: 800,
          height: 800,
          alt: `${SITE_NAME} — Software Engineer`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isHome ? SITE_TITLE : `${title} | ${SITE_NAME}`,
      description,
      creator: '@Ankush_Rathour',
      images: [`${SITE_URL}/AnkushRathour.jpeg`],
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  }
}

export const homeMetadata: Metadata = {
  ...createPageMetadata({
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
    ogType: 'profile',
  }),
  keywords: [
    'Ankush Rathour',
    'Software Engineer',
    'Python Developer',
    'Django',
    'FastAPI',
    'AudioMaker',
    'Full Stack Developer',
  ],
}