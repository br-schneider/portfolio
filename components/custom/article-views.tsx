'use client'

import { useQuery } from '@tanstack/react-query'

export default function ArticleViews({
  slug,
  separator,
}: {
  slug: string
  separator?: boolean
}) {
  const { data, isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const res = await fetch(`/api/articles/views?slug=${slug}`, {
        cache: 'no-store',
      })

      return res.json()
    },
  })

  const isError = data?.error ? true : false

  if (isError) {
    return null
  }

  if (isLoading) {
    return (
      <span className="mx-3 h-5 w-10 animate-pulse rounded-md bg-muted"></span>
    )
  }

  return (
    <>
      {separator && '•'}
      <strong className={separator ? 'pl-1' : ''}>
        {data?.views ?? 0} views
      </strong>
    </>
  )
}
