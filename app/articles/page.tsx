import { Card } from '@/components/tailwind/card'
import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { Metadata } from 'next'
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
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles - Brett Schneider',
  description:
    'All of my long-form thoughts on programming, product design, and more, collected in chronological order.',
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software design, product design, and the tech industry."
      intro="All of my long-form thoughts on programming, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}