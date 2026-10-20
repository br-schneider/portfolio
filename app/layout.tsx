import { ReactQueryClientProvider } from '@/components/custom/react-query-client-provider'
import { Layout } from '@/components/tailwind/layout'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://bretts.dev'),
  title: {
    template: '%s - Brett Schneider',
    default: 'Brett Schneider - CTO at Analyst House',
  },
  description:
    "Hi, I'm Brett, CTO of Analyst House in Austin. I build finance software and AI tools for accounting teams and the businesses they support.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'development' && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <ReactQueryClientProvider>
        <body
          className={cn(
            'bg-background min-h-screen font-sans antialiased',
            fontSans.variable,
          )}
        >
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
          <Analytics />
        </body>
      </ReactQueryClientProvider>
    </html>
  )
}
