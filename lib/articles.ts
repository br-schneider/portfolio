import glob from 'fast-glob'
import { unstable_noStore } from 'next/cache'

interface Article {
  title: string
  description: string
  author: string
  date: string
  views: number
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  unstable_noStore()

  const articleFilenames = await glob('*/page.mdx', {
    cwd: './app/articles',
  })

  const articles = await Promise.all(articleFilenames.map(importArticle))
  const today = new Date().toISOString().split('T')[0]

  const articlesWithViews = await Promise.all(
    articles.map(async (article) => {
      const res = await fetch(
        `https://plausible.io/api/v1/stats/aggregate?site_id=bretts.dev&period=custom&date=2020-01-01,${today}&filters=event:page%3D%3D%2Farticles%2F${article.slug}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`,
          },
        },
      )
        .then((response) => response.json())
        .catch((error) => console.error(error))

      // there were 17 views from the old URL
      if (article.slug === 'unleashing-your-ecommerce-potential') {
        return {
          ...article,
          views: res?.results?.visitors?.value + 17 || 0,
        }
      }

      return {
        ...article,
        views: res?.results?.visitors?.value || 0,
      }
    }),
  )

  return articlesWithViews.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
