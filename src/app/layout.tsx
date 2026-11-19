import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Schema } from '@/components/layout/Schema'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'

const FONT_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400&display=optional'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
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
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
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
    google: '6p2_WAOIq9z7_jaU8F2E_tV5JCUwLn0DTvEF8B9oNfE',
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
        <link rel="preload" href={FONT_STYLESHEET} as="style" />
        <link
          id="google-fonts"
          href={FONT_STYLESHEET}
          rel="stylesheet"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById('google-fonts');if(l)l.media='all';})();`,
          }}
        />
        <link
          rel="preload"
          href="/AnkushRathour-384.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/AnkushRathour.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
        <link rel="icon" href="/AnkushRathour.ico" />
        <link rel="apple-touch-icon" href="/AnkushRathour.jpeg" />
        <meta name="p:domain_verify" content="0c20c099c09f10fb3e1cc4fdfeae09c2" />
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