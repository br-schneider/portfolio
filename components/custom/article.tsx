import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

export default function Article({
  article,
}: {
  article: {
    slug: string
    title: string
    date: string
    description: string
  }
}) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block"
    >
      <article className="flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-base font-medium text-foreground underline-offset-2 group-hover:underline">
            {article.title}
          </h2>
          <time
            dateTime={article.date}
            className="hidden flex-none text-sm tabular-nums text-muted-foreground sm:block"
          >
            {formatDate(article.date)}
          </time>
        </div>
        <p className="text-sm text-muted-foreground">
          {article.description}
        </p>
      </article>
    </Link>
  )
}
