'use client'

import { Container } from '@/components/tailwind/container'
import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'

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

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-foreground transition-colors"
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
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const isActive = usePathname() === href

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
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
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const reduceMotion = useReducedMotion()
  const closedTransform = reduceMotion ? 'translateY(0px)' : 'translateY(-6px)'

  function closeMenu() {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (!mobileMenuOpen) return

    function onPointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        buttonRef.current?.focus()
      }
    }

    function dismiss() {
      setMobileMenuOpen(false)
    }

    const desktop = window.matchMedia('(min-width: 768px)')
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('popstate', dismiss)
    desktop.addEventListener('change', dismiss)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('popstate', dismiss)
      desktop.removeEventListener('change', dismiss)
    }
  }, [mobileMenuOpen])

  return (
    <header ref={headerRef} className="relative z-50 w-full">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-foreground text-sm font-medium"
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
              ref={buttonRef}
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuOpen ? menuId : undefined}
              className="text-muted-foreground hover:text-foreground focus-visible:outline-ring relative -me-3 flex size-11 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile nav */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-navigation"
            id={menuId}
            initial={{ opacity: 0, transform: closedTransform }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={{
              opacity: 0,
              transform: closedTransform,
              pointerEvents: 'none',
            }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="bg-background border-border absolute inset-x-0 top-full border-y md:hidden"
          >
            <Container>
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col py-2 text-sm [&>a]:flex [&>a]:min-h-11 [&>a]:items-center"
              >
                <NavLink href="/about" onClick={closeMenu}>
                  About
                </NavLink>
                <NavLink href="/articles" onClick={closeMenu}>
                  Articles
                </NavLink>
                <NavLink href="/software" onClick={closeMenu}>
                  Software
                </NavLink>
                <NavLink href="/photography" onClick={closeMenu}>
                  Photos
                </NavLink>
                <NavLink href="/uses" onClick={closeMenu}>
                  Uses
                </NavLink>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
