import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles } from '../../lib/articles'
import { formatDate } from '../../lib/formatDate'

type Article = {
  slug: string
  title: string
  date: string
  description: string
}

function Article({ article }: { article: Article }) {
  return (
    <article>
      <Link
        href={`/articles/${article.slug}`}
        className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
      >
        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-muted-foreground">
          {article.title}
        </span>
        <time
          dateTime={article.date}
          className="flex-none text-xs text-muted-foreground sm:text-sm sm:tabular-nums"
        >
          {formatDate(article.date)}
        </time>
      </Link>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'My Thoughts on Software and Business Strategy.',
  description:
    'Dive into my analyses on software design, business strategy, and technological advancements in the industry.',
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="My Thoughts on Software and Business Strategy."
      intro="Dive into my analyses on software design, business strategy, and technological advancements in the industry."
    >
      <div className="flex flex-col divide-y divide-border">
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </SimpleLayout>
  )
}
