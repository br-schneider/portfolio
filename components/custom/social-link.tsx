import Link from 'next/link'
import { SVGProps, type JSX } from 'react'

export default function SocialLink({
  icon: Icon,
  ...props
}: {
  icon: (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
  ) => JSX.Element
  href: string
  title: string
}) {
  return (
    <Link target={'_blank'} className="group -m-1 p-1" {...props}>
      <Icon className="h-5 w-5 fill-muted-foreground transition-colors group-hover:fill-foreground" />
    </Link>
  )
}
