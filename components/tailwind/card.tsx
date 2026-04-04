import clsx from 'clsx'
import Link from 'next/link'

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  const Component = as ?? 'div'

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link {...props}>
      <span className="absolute -inset-x-4 -inset-y-6 z-20" />
      <span className="relative z-10">{children}</span>
    </Link>
  )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  const Component = as ?? 'h2'

  return (
    <Component className="text-base font-medium text-foreground underline-offset-2 group-hover:underline">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={clsx(
        'relative z-10 mt-2 text-sm text-muted-foreground',
        className,
      )}
    >
      {children}
    </p>
  )
}

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T
}) {
  const Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground',
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
