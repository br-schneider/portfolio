import { ReactQueryClientProvider } from '@/components/custom/react-query-client-provider'
import { Layout } from '@/components/tailwind/layout'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Be_Vietnam_Pro as FontSans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s - Brett Schneider',
    default: 'Brett Schneider - Founding Software Engineer',
  },
  description:
    'I’m Brett, a software engineer and entrepreneur based in Austin, TX. I work on the Concentro team, where we create innovative software to democratize access to affordable funding for renewable energy.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <Script
          async
          src="https://cdn.seline.so/seline.js"
          data-token="7093d0f89af9208"
        ></Script>

        <Script
          defer
          data-domain="bretts.dev"
          src="https://plausible.io/js/script.js"
        ></Script>

        <Script
          async
          src="http://dev.tracklyze.com/insight-core.js"
          data-site-id="513ee7b5-37ad-4e7d-8d77-de12c19815df"
        ></Script>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
