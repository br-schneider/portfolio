/* eslint-disable no-undef */
import glob from 'fast-glob'
import * as path from 'path'

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  component: React.FC<ComponentProps>
}

interface ComponentProps {
  isRssFeed?: boolean
}

async function importArticle(articleFilename: string): Promise<Article> {
  const { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  const articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime()
  )
}
