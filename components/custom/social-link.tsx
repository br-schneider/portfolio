import Link from 'next/link'
import { SVGProps } from 'react'

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
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}
