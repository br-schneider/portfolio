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
          {formatDate(article.date)}{' '}
          {/* <ArticleViews slug={article.slug} separator /> */}
        </Card.Eyebrow>

        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block "
      >
        <div> {formatDate(article.date)}</div>
        {/* <ArticleViews slug={article.slug} /> */}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles on Business and Tech',
  description:
    'Dive into my analyses on crucial business tactics, software design, and technological advancements in the industry.',
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Insights on Business Strategies and Technology"
      intro="Dive into my analyses on crucial business tactics, software design, and technological advancements in the industry."
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
