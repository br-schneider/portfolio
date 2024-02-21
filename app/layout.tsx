import { Layout } from '@/components/tailwind/layout'
import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s - Brett Schneider',
    default: 'Brett Schneider - Founding Software Engineer',
  },
  description:
    'I’m Brett, a software engineer and entrepreneur based in Austin. I work on the Gladiate Law team, where we develop technologies that empower attorneys to practice law on their own terms.',
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
        <SpeedInsights />
        <Analytics />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
