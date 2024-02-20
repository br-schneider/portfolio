/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { formatDate } from '@/lib/formatDate'
import { Card } from '../Card'

export default function Article({
  article,
}: {
  article: {
    slug: string
    title: string
    description: string
    date: string
  }
}) {
  return (
    // @ts-ignore
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      {/* @ts-ignore */}
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
