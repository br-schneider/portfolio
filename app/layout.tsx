import { ReactQueryClientProvider } from '@/components/custom/react-query-client-provider'
import { Layout } from '@/components/tailwind/layout'
import { cn } from '@/lib/utils'
import { personSchema, profile, profileDescription } from '@/lib/profile'
import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    template: `%s - ${profile.name}`,
    default: `${profile.name} - ${profile.title} at ${profile.company.name}`,
  },
  description: profileDescription,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  alternates: {
    types: {
      'application/rss+xml': `${profile.siteUrl}/feed.xml`,
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
        <link rel="describedby" href="/llms.txt" type="text/plain" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
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
