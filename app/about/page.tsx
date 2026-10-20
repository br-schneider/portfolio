import SocialIconsRow from '@/components/custom/social-icons-row'
import { Container } from '@/components/tailwind/container'
import portraitImage from '@/images/portrait.jpg'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Brett, CTO of Analyst House and Analyst House Labs, based in Austin. I build finance software and AI tools for accounting teams and businesses.",
}

export default function About() {
  return (
    <Container className="mt-10 sm:mt-14">
      <div className="stagger">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[1fr_180px] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-12">
          <div className="space-y-4">
            <div className="lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="bg-muted aspect-square rounded-lg object-cover"
              />
            </div>
            <SocialIconsRow />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-foreground text-2xl font-medium tracking-tight">
              I&apos;m Brett, an entrepreneur building companies in Austin
            </h1>

            <div className="text-muted-foreground mt-6 space-y-6 text-base">
              <p>
                I&apos;m CTO of Analyst House and Analyst House Labs, building
                software for accounting teams and the businesses they support.
                Analyst House provides accounting and CFO services, and Labs
                builds the technology behind them.
              </p>
              <p>
                My work spans practice management, client portals, and AI agents
                that help people understand their finances. We build for Analyst
                House first, with the goal of bringing those tools to other
                firms and finance teams.
              </p>
              <p>
                Before Analyst House, I was a founding engineer at MeritFirst,
                Concentro, and Gladiate, taking products from early ideas to
                production.
              </p>
              <p>
                I care deeply about the way design and engineering meet. A
                product shines when its logic feels effortless and its interface
                feels welcoming, so I shape clean architecture, intuitive flows,
                and purposeful features at every step.
              </p>
              <p>
                Curiosity keeps me moving. If you would like to trade ideas,
                collaborate, or simply say hello, reach out through the links on
                the page. I would love to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
