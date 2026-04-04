'use client'

import { Container } from '@/components/tailwind/container'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="text-muted-foreground transition-colors hover:text-foreground"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-5 w-5 fill-current stroke-current dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 fill-current stroke-current dark:block" />
    </button>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {children}
    </Link>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 w-full">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground"
          >
            Brett Schneider
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/software">Software</NavLink>
            <NavLink href="/photography">Photos</NavLink>
            <NavLink href="/uses">Uses</NavLink>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border pb-6 pt-4 text-sm md:hidden">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/software">Software</NavLink>
            <NavLink href="/photography">Photos</NavLink>
            <NavLink href="/uses">Uses</NavLink>
          </nav>
        )}
      </Container>
    </header>
  )
}
