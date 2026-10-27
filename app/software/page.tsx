import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { Badge } from '@/components/ui/badge'

export const revalidate = 86400

async function getLifetimeDownloads() {
  const today = new Date().toISOString().slice(0, 10)
  const ranges: string[] = []

  for (let year = 2026; year <= Number(today.slice(0, 4)); year++) {
    const start = year === 2026 ? '2026-03-19' : `${year}-01-01`
    const end = year === Number(today.slice(0, 4)) ? today : `${year}-12-31`
    ranges.push(`${start}:${end}`)
  }

  try {
    const counts = await Promise.all(
      ranges.map(async (range) => {
        const response = await fetch(
          `https://api.npmjs.org/downloads/point/${range}/nextjs-nav-guard`,
          { next: { revalidate: 86400 }, signal: AbortSignal.timeout(5000) },
        )

        if (!response.ok) throw new Error('Could not fetch npm downloads')

        const data: { downloads?: unknown } = await response.json()
        if (
          typeof data.downloads !== 'number' ||
          !Number.isSafeInteger(data.downloads) ||
          data.downloads < 0
        ) {
          throw new Error('Invalid npm download count')
        }

        return data.downloads
      }),
    )

    return counts.reduce((total, count) => total + count, 0)
  } catch {
    return null
  }
}

const projects = [
  {
    name: 'nextjs-nav-guard',
    description:
      'The original next-navigation-guard package was abandoned and broke on newer versions of Next.js. I forked it, fixed the runtime crashes, removed the deprecated Pages Router support, and have been maintaining it since. It gives you a simple hook to prevent users from navigating away from unsaved changes.',
    href: 'https://nextjs-nav-guard.vercel.app/',
    label: 'view project',
  },
  {
    name: 'SelfPing',
    description:
      'For a variety of reasons, I needed to be able to text myself via api. I found it annoyingly difficult to find a quick and easy solution. Here is a simple app that allows you to text yourself via api. It is cost effective and easy to use.',
    href: 'https://try.selfping.com/GWujuwd',
    label: 'selfping.com',
  },
]

export const metadata: Metadata = {
  title: 'Personal Software',
  description:
    'I have adapted my personal software for others to use. I try to make all my personal software free to use and if not free, priced to cover the cost of its underlying infrastructure.',
}

export default async function Projects() {
  const lifetimeDownloads = await getLifetimeDownloads()

  return (
    <SimpleLayout
      title="Personal Software."
      intro="Whenever I have a problem, I try to solve it with software. I try to make all my personal software free to use and if not free, priced to cover the cost of its underlying infrastructure."
    >
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h2 className="text-foreground text-sm font-medium">
                  {project.name}
                </h2>
                {project.name === 'nextjs-nav-guard' &&
                  lifetimeDownloads !== null && (
                    <Badge
                      variant="subtle"
                      title={`${lifetimeDownloads.toLocaleString('en-US')} lifetime downloads on npm`}
                      aria-label={`${lifetimeDownloads.toLocaleString('en-US')} lifetime downloads on npm`}
                    >
                      <span className="tabular-nums">
                        {lifetimeDownloads.toLocaleString('en-US', {
                          notation: 'compact',
                          maximumFractionDigits: 1,
                        })}
                      </span>
                      <span className="text-muted-foreground font-normal">
                        downloads
                      </span>
                    </Badge>
                  )}
              </div>
              <Link
                href={project.href}
                target="_blank"
                className="text-muted-foreground hover:text-foreground flex-none text-xs transition-colors"
              >
                {project.label} ↗
              </Link>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
