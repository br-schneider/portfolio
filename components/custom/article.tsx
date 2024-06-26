import { Card } from '@/components/tailwind/card'
import { formatDate } from '@/lib/formatDate'

export default function Article({
  article,
}: {
  article: {
    slug: string
    title: string
    date: string
    description: string
    views: number
  }
}) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)} •<strong>&nbsp;{article.views} views</strong>
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
