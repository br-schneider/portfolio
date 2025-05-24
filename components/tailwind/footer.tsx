'use client'

import { ContainerInner, ContainerOuter } from '@/components/tailwind/container'
import Link from 'next/link'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-sky-500 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/software">Software</NavLink>
                <NavLink href="/photography">Photos</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Brett Schneider. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
