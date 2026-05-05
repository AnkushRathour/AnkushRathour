import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Schema } from '@/components/layout/Schema'

const SITE_URL = 'https://ankushrathour.com'
const NAME = 'Ankush Rathour'
const TITLE = 'Ankush Rathour | Software Engineer'
const DESCRIPTION =
  'Ankush Rathour — Software Engineer specializing in architecting scalable full-stack solutions and seamless third-party integrations. Creator of AudioMaker, TalkGenie and ChatPDF, AI-powered tools, and Unified Multimodal AI Agents.'
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Ankush Rathour',
    'Ankushrathour',
    'Software Engineer',
    'Python Developer',
    'Django',
    'FastAPI',
    'AWS',
    'GCP',
    'Azure',
    'AI Engineer',
    'Machine Learning',
    'AudioMaker',
    'PyPI',
    'Full Stack Developer',
    'Backend Engineer',
    'Solution Architect',
    'Solan',
    'India',
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: NAME,
    images: [
      {
        url: `${SITE_URL}/AnkushRathour.jpeg`,
        width: 800,
        height: 800,
        alt: `${NAME} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@Ankush_Rathour',
    images: [`${SITE_URL}/AnkushRathour.jpeg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here
    // google: 'your-verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/AnkushRathour.ico" />
        <link rel="apple-touch-icon" href="/AnkushRathour.png" />
        <Schema />
      </head>
      <body className="noise-overlay">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
