/* eslint-disable react/prop-types */
import clsx from 'clsx'
import Link from 'next/link'

const variantStyles = {
  primary:
    'bg-foreground font-medium text-background hover:opacity-90 active:opacity-80',
  secondary:
    'border border-border font-medium text-foreground hover:bg-accent active:bg-accent/80',
}

export function Button({
  variant = 'primary',
  className,
  href,
  ...props
}: {
  variant?: keyof typeof variantStyles
  className?: string
  href?: string
  [key: string]: any
}) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
