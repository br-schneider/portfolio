import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Article, getAllArticles } from './getAllArticles'

type ComponentType = React.FC<ComponentProps>

interface ComponentProps {
  isRssFeed?: boolean
}

interface ExtendedArticle extends Article {
  component: ComponentType
}

export async function generateRssFeed() {
  const articles: ExtendedArticle[] = await getAllArticles()
  const siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL!
  const author = {
    name: 'Brett Schneider',
    email: 'brett.c.schneider@gmail.com',
  }

  const feed = new Feed({
    title: author.name,
    description: "Brett Schneider's personal website",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (const article of articles) {
    const url = `${siteUrl}/articles/${article.slug}`
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(article.component, { isRssFeed: true })
    )

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
