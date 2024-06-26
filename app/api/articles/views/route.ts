export const dynamic = 'force-dynamic' // defaults to auto

import { NextRequest, NextResponse } from 'next/server'

const idToRequestCount = new Map<string, number>() // keeps track of individual users
const rateLimiter = {
  windowStart: Date.now(),
  windowSize: 10000,
  maxRequests: 4,
}

const limit = (ip: string) => {
  // Check and update current window
  const now = Date.now()
  const isNewWindow = now - rateLimiter.windowStart > rateLimiter.windowSize
  if (isNewWindow) {
    rateLimiter.windowStart = now
    idToRequestCount.set(ip, 0)
  }

  // Check and update current request limits
  const currentRequestCount = idToRequestCount.get(ip) ?? 0
  if (currentRequestCount >= rateLimiter.maxRequests) return true
  idToRequestCount.set(ip, currentRequestCount + 1)

  return false
}

export async function GET(req: NextRequest) {
  const ip = req.ip ?? req.headers.get('X-Forwarded-For') ?? 'unknown'
  const isRateLimited = limit(ip)

  if (isRateLimited) {
    return NextResponse.json({ error: 'rate limited' }, { status: 429 })
  }

  const today = new Date().toISOString().split('T')[0]

  //get slug from query params
  const url = new URL(req.url)
  const slug = url.searchParams.get('slug')

  if (!slug) {
    // return 400 if no slug is provided
    return NextResponse.json(
      {
        error: 'No slug provided',
      },
      {
        status: 400,
      },
    )
  }

  const res = await fetch(
    `https://plausible.io/api/v1/stats/aggregate?site_id=bretts.dev&period=custom&date=2020-01-01,${today}&filters=event:page%3D%3D%2Farticles%2F${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`,
      },
    },
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))

  const views = res?.results?.visitors?.value || 0

  // there were 17 views from the old URL
  if (slug === 'unleashing-your-ecommerce-potential') {
    return NextResponse.json({
      views: views + 17 ?? 0,
    })
  }

  return NextResponse.json({
    views: views ?? 0,
  })
}
