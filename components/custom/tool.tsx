import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function Tool({
  title,
  href,
  logo,
  children,
}: {
  title: string
  href: string
  logo: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="group hover:bg-accent focus-visible:outline-ring -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span className="text-foreground bg-card mt-0.5 flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border">
          {logo.endsWith('.png') ? (
            <Image
              src={logo}
              alt=""
              width={32}
              height={32}
              className="size-8 object-contain grayscale"
            />
          ) : (
            <span
              aria-hidden="true"
              className="size-[18px] bg-current [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
              style={{ maskImage: `url(${logo})` }}
            />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-foreground text-sm font-medium">{title}</h3>
            <ArrowUpRight
              className="text-muted-foreground/60 group-hover:text-foreground size-3 shrink-0 transition-colors"
              aria-hidden="true"
            />
          </div>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            {children}
          </p>
        </div>
      </Link>
    </li>
  )
}
