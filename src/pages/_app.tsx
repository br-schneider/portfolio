/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { AppProps } from 'next/app'

// this hook is used to track the previous pathname and will infer the type of the value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps, router }: AppProps) {
  const previousPathname = usePrevious(router.pathname)

  useEffect(() => {
    axios.get('/api/hello')
  }, [])

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
          src="https://tracklyze.com/insightCore.js"
        ></script>
      )}

      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  )
}
