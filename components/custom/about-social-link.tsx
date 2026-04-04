import clsx from 'clsx'
import Link from 'next/link'
import { JSX } from 'react'

export default function AboutSocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  children: React.ReactNode
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <Icon className="h-5 w-5 flex-none fill-muted-foreground transition-colors group-hover:fill-foreground" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
