'use client'

import { AppContext } from '@/app/providers'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useContext } from 'react'
import { Container } from './container'
import { Prose } from './prose'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  const router = useRouter()
  const { previousPathname } = useContext(AppContext)
  const pathname = usePathname()

  const slug = pathname.split('/').pop()

  const { data, isLoading } = useQuery({
    queryKey: ['article', article.slug],
    queryFn: async () => {
      const res = await fetch(`/api/articles/views?slug=${slug}`)

      return res.json()
    },
  })

  const isError = data?.error ? true : false

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>

              <div className="order-first flex items-center gap-3">
                <time
                  dateTime={article.date}
                  className=" inline-flex w-fit items-center rounded-md bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-600/20 "
                >
                  <span className="">{formatDate(article.date)}</span>
                </time>
                {!isError &&
                  (isLoading ? (
                    <span className=" inline-flex w-fit items-center rounded-md bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-600/20 ">
                      Loading...
                    </span>
                  ) : (
                    <span className="inline-flex w-fit items-center rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {data?.views ?? 0} views
                    </span>
                  ))}
              </div>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
