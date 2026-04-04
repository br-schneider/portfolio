import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/tailwind/simple-layout'

const projects = [
  {
    name: 'nextjs-nav-guard',
    description:
      'The original next-navigation-guard package was abandoned and broke on newer versions of Next.js. I forked it, fixed the runtime crashes, removed the deprecated Pages Router support, and have been maintaining it since. It gives you a simple hook to prevent users from navigating away from unsaved changes.',
    href: 'https://nextjs-nav-guard-personal-66985.unkey.app/',
    label: 'view project',
  },
  {
    name: 'BoltBudget',
    description:
      'I was tired of using a spreadsheet to track my budget and wanted something that is easy to use from my phone. I created a simple app to help me track my budget. Its relatively opinionated in how it works and is free for anyone to use.',
    href: 'https://try.boltbudget.com/1B8Y1',
    label: 'boltbudget.com',
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

export default function Projects() {
  return (
    <SimpleLayout
      title="Personal Software."
      intro="Whenever I have a problem, I try to solve it with software. I try to make all my personal software free to use and if not free, priced to cover the cost of its underlying infrastructure."
    >
      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-medium text-foreground">
                {project.name}
              </h2>
              <Link
                href={project.href}
                target="_blank"
                className="flex-none text-xs text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {project.label} ↗
              </Link>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
