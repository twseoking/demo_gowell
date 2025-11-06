import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { seoConfig, getPageMetadata } from '@/config/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...getPageMetadata(),
  metadataBase: new URL(seoConfig.siteUrl),
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
    // Add Google Search Console verification code here
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.organization),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
