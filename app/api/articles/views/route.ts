export const dynamic = 'force-dynamic' // defaults to auto

import { NextRequest, NextResponse } from 'next/server'

interface RateLimiterEntry {
  count: number
  lastRequest: number
  blockedUntil: number
}

const idToRequestCount = new Map<string, RateLimiterEntry>() // keeps track of individual users

const rateLimiter = {
  windowSize: 10000, // 10 seconds window for request counting
  maxRequests: 5,
  blockDuration: 3600000, // 1 hour in milliseconds
}

const limit = (ip: string) => {
  const now = Date.now()
  const entry = idToRequestCount.get(ip) ?? {
    count: 0,
    lastRequest: 0,
    blockedUntil: 0,
  }

  // Check if the IP is currently blocked
  if (entry.blockedUntil > now) {
    return true
  }

  // Reset the counter if a new window starts
  if (now - entry.lastRequest > rateLimiter.windowSize) {
    entry.count = 0
  }

  // Increment the request count
  entry.count += 1
  entry.lastRequest = now

  // Check if the request count exceeds the maximum allowed
  if (entry.count > rateLimiter.maxRequests) {
    entry.blockedUntil = now + rateLimiter.blockDuration
    idToRequestCount.set(ip, entry)
    return true
  }

  idToRequestCount.set(ip, entry)
  return false
}

export async function GET(req: NextRequest) {
  const ip = req.ip ?? req.headers.get('X-Forwarded-For') ?? 'unknown'
  const isRateLimited = limit(ip)

  if (isRateLimited) {
    return NextResponse.json({ error: 'rate limited' }, { status: 429 })
  }

  const today = new Date().toISOString().split('T')[0]

  // get slug from query params
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
      cache: 'no-store',
    },
  )
    .then((response) => response.json())
    .catch((error) => error.json())

  if (res.error) {
    return NextResponse.json({ error: res.error }, { status: 500 })
  }

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
