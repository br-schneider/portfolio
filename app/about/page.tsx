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
    "I'm Brett, a software engineer and entrepreneur based in Austin. I build products that turn complex ideas into clear, useful software.",
}

export default function About() {
  return (
    <Container className="mt-10 sm:mt-14">
      <div className="stagger">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[1fr_180px] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-12">
          <div>
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-lg bg-muted object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-2xl font-medium tracking-tight text-foreground">
              I&apos;m Brett, an entrepreneur building companies in Austin
            </h1>

            <div className="mt-6 space-y-6 text-base text-muted-foreground">
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
                collaborate, or simply say hello, reach out through the links on
                the page. I would love to connect.
              </p>
            </div>
          </div>

          <div>
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
                className="mt-8 border-t border-border pt-8"
              >
                Email me
              </AboutSocialLink>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
