import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'
import TurndownService from 'turndown'

const INTERNAL_HEADER = 'x-md-internal-fetch'

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
})

function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false
  return accept
    .toLowerCase()
    .split(',')
    .some((part) => part.trim().split(';')[0].trim() === 'text/markdown')
}

function htmlToMarkdown(html: string): string {
  const $ = cheerio.load(html)
  $('script, style, noscript, svg, link[rel="preload"]').remove()
  const main = $('main').first()
  const root = main.length ? main : $('body')
  return turndown.turndown(root.html() || '').trim()
}

export async function proxy(req: NextRequest) {
  if (req.headers.get(INTERNAL_HEADER)) return NextResponse.next()
  if (!wantsMarkdown(req.headers.get('accept'))) return NextResponse.next()

  const upstream = await fetch(req.nextUrl.toString(), {
    method: 'GET',
    headers: {
      accept: 'text/html',
      'accept-language': req.headers.get('accept-language') ?? 'en',
      cookie: req.headers.get('cookie') ?? '',
      [INTERNAL_HEADER]: '1',
    },
    redirect: 'manual',
  })

  const contentType = upstream.headers.get('content-type') ?? ''
  if (!upstream.ok || !contentType.includes('text/html')) {
    return NextResponse.next()
  }

  const html = await upstream.text()
  const markdown = htmlToMarkdown(html)
  const tokens = Math.ceil(markdown.length / 4)

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}

export const config = {
  matcher: [
    '/((?!_next/|api/|.well-known/|feed.xml|sitemap.xml|robots.txt|favicon.ico|.*\\.[^/]+$).*)',
  ],
}
