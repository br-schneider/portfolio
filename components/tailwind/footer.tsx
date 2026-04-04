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
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24">
      <ContainerOuter>
        <div className="pb-12 pt-8">
          <div className="mx-auto h-px w-full max-w-xl bg-foreground/10" />
          <ContainerInner>
            <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/software">Software</NavLink>
                <NavLink href="/photography">Photos</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="text-sm text-muted-foreground/60">
                &copy; {new Date().getFullYear()} Brett Schneider
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
