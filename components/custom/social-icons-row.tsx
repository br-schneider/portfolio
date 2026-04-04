import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/tailwind/social-icons'
import Link from 'next/link'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" />
      <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" />
    </svg>
  )
}

const iconLink = 'text-muted-foreground transition-colors hover:text-foreground'

export default function SocialIconsRow() {
  return (
    <div className="flex items-center gap-4">
      <Link href="https://x.com/brettcschneids" target="_blank" aria-label="Follow on X" className={iconLink}>
        <XIcon className="h-5 w-5 fill-current" />
      </Link>
      <Link href="https://github.com/br-schneider" target="_blank" aria-label="Follow on GitHub" className={iconLink}>
        <GitHubIcon className="h-5 w-5 fill-current" />
      </Link>
      <Link href="https://linkedin.com/in/brettcschneider/" target="_blank" aria-label="Follow on LinkedIn" className={iconLink}>
        <LinkedInIcon className="h-5 w-5 fill-current" />
      </Link>
      <Link href="mailto:brett.c.schneider@gmail.com" aria-label="Send email" className={iconLink}>
        <MailIcon className="h-5 w-5 stroke-current" />
      </Link>
    </div>
  )
}
