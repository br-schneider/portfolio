import { GitHubIcon, LinkedInIcon } from '@/components/tailwind/SocialIcons'
import { Container } from '@/components/tailwind/container'
import portraitImage from '@/images/portrait.jpg'
import clsx from 'clsx'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { JSX, SVGProps } from 'react'

function SocialLink({
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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Brett Schneider. I live in Austin, Texas, where I engineer and design applications.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Brett Schneider, an Entrepreneur and Software Engineer Building
            Companies in Austin, Texas.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey began at the University of Colorado Boulder, where I
              earned a degree in Computer Science, laying the groundwork for a
              career not just in engineering applications but in forging
              companies. I am currently working at{' '}
              <a className="underline" href="https://www.concentro.io/">
                Concentro
              </a>{' '}
              where we create innovative applications to democratize access to
              affordable funding for renewable energy.
            </p>
            <p>
              With many years of experience, I’ve transitioned from engineering
              solutions to being at the forefront of creating businesses that
              address critical needs. My passion lies in the fusion of
              technology and entrepreneurship, especially in developing
              platforms that are not only accessible and high-performing but
              also make a significant impact on the communities they serve.
            </p>
            <p>
              The intersection of design and engineering is where I thrive,
              believing that the true elegance of a solution lies in its
              simplicity and user experience. My commitment to design is about
              more than aesthetics; it's about creating intuitive and inclusive
              systems that enhance the interaction between technology and its
              users. This approach has been a cornerstone in my journey as I
              move beyond application development to build companies with a
              conscience.
            </p>
            <p>
              I’m always looking for new opportunities to learn and grow. If you
              have any questions or would like to chat, feel free to reach out
              to me at the links provided.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/br-schneider"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/brettcschneider/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:brett.c.schneider@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              brett.c.schneider@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
