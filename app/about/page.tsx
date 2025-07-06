import AboutSocialLink from '@/components/custom/about-social-link'
import AboutMailIcon from '@/components/icons/about-mail-icon'
import { Container } from '@/components/tailwind/container'
import { GitHubIcon, LinkedInIcon } from '@/components/tailwind/social-icons'
import portraitImage from '@/images/portrait.jpg'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Brett, a software engineer and entrepreneur based in Austin. I build products that turn complex ideas into clear, useful software.',
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
            I'm Brett, an entrepreneur building companies in Austin
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I build products that turn complex ideas into clear, useful
              software. Over the years I have shipped production systems and
              guided lean teams at venture-backed startups, always with an eye
              on real-world results.
            </p>
            <p>
              My work sits at the intersection of code and entrepreneurship. I
              have launched SaaS products, grown design systems, and led
              early-stage teams from first sketch to public release. Whatever
              the project, my goal is to make technology friendly and valuable
              for the people who rely on it.
            </p>
            <p>
              I care deeply about the way design and engineering meet. A product
              shines when its logic feels effortless and its interface feels
              welcoming, so I shape clean architecture, intuitive flows, and
              purposeful features at every step.
            </p>
            <p>
              Curiosity keeps me moving. If you would like to trade ideas,
              collaborate, or simply say hello, reach out through the links
              below. I would love to connect.
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <AboutSocialLink
              href="https://github.com/br-schneider"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </AboutSocialLink>
            <AboutSocialLink
              href="https://linkedin.com/in/brettcschneider/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </AboutSocialLink>
            <AboutSocialLink
              href="mailto:brett.c.schneider@gmail.com"
              icon={AboutMailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              brett.c.schneider@gmail.com
            </AboutSocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
