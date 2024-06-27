import { Card } from '@/components/tailwind/card'
import { formatDate } from '@/lib/formatDate'
import ArticleViews from './article-views'

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
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}{' '}
        <ArticleViews slug={article.slug} separator />
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
