/* eslint-disable react/prop-types */
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'focus-visible'
import { AppProps } from 'next/app'
import { useEffect, useRef } from 'react'

// this hook is used to track the previous pathname and will infer the type of the value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: AppProps) {
  const previousPathname = usePrevious(router.pathname)

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <script
          defer
          data-domain="bretts.dev"
          src="https://plausible.io/js/script.js"
        ></script>
      )}

      {process.env.NODE_ENV === 'production' && (
        <script
          defer
          data-domain="bretts.dev"
          src="https://tracklyze.com/insightCoreV2.js"
        ></script>
      )}

      <SpeedInsights />

      <Analytics />

      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
