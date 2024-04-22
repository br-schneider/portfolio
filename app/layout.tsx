import { Layout } from '@/components/tailwind/layout'
import '@/styles/tailwind.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s - Brett Schneider',
    default: 'Brett Schneider - Founding Software Engineer',
  },
  description:
    'I’m Brett, a software engineer and entrepreneur based in Austin, TX. I work on the Concentro team, where we create innovative applications to democratize access to affordable funding for renewable energy.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Script
          defer
          data-domain="bretts.dev"
          src="https://www.tracklyze.com/insightCore.js"
        ></Script>
        <Script
          defer
          data-domain="bretts.dev"
          src="https://plausible.io/js/script.js"
        ></Script>

        <SpeedInsights />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
