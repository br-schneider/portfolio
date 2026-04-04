'use client'

import { AppContext } from '@/app/providers'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { Container } from './container'
import { Prose } from './prose'

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  const router = useRouter()
  const { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-10 sm:mt-14">
      <div className="stagger">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="mb-8 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; Back
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="text-2xl font-medium tracking-tight text-foreground">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="mt-2 text-sm tabular-nums text-muted-foreground"
              >
                {formatDate(article.date)}
              </time>
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
