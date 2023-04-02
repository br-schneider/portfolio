/* eslint-disable react/prop-types */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  title,
  ...props
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <Section title={title} {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li" className={''}>
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Brett Schneider</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Development">
            <Tool title="TailwindCSS">
              I rely on Tailwind for nearly all my projects. It is an
              outstanding utility-first CSS framework that simplifies the
              creation of responsive, accessible, and high-performance
              interfaces.
            </Tool>
            <Tool title="Next.js">
              Next.js is my go-to for all React projects. It is an excellent
              framework for developing static and server-rendered React
              applications.
            </Tool>
            <Tool title="TanStack Query">
              TanStack Query is an essential data-fetching library I use for my
              projects. It simplifies the process of fetching, caching, and
              syncing data in React applications, making it easy to manage
              server state and improve user experience.
            </Tool>
            <Tool title="Vercel">
              I use Vercel for most of my websites. It is highly flexible and
              user-friendly, capable of scaling with my site and providing
              numerous outstanding features out of the box.
            </Tool>
            <Tool title="VS Code">
              VS Code is my development environment of choice. Its extensibility
              and open-source nature are impressive. I use the Material Theme
              extension and the Material Icon Theme extension.
            </Tool>
            <Tool title="GitHub Copilot">
              I&apos;ve been using GitHub Copilot for a few months now and
              I&apos;m absolutely in love with it. It&apos;s a game changer for
              me. I use it for everything from writing blog posts to building
              out new features in my apps.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma is my preferred tool for all design work, including
              wireframes, prototypes, and final designs. It is an excellent
              platform for collaboration with others.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. The M1 Pro is a beast. I&apos;m able
              to run multiple VMs, run a bunch of Docker containers, and have a
              bunch of browser tabs open without any slowdown.
            </Tool>
            <Tool title="11” iPad Pro">
              I utilize this device for reading, writing, and note-taking. It
              also serves as a second screen for my laptop. I am a big fan of
              the Apple Pencil and the Smart Keyboard Folio.
            </Tool>
            <Tool title="LG 4k HDR Monitors">
              These monitors are my primary display and are excellent for
              development. I appreciate the HDR support and the convenience of a
              vertical monitor.
            </Tool>
            <Tool title="MagFlött Magnetic Stand by CharJenPro">
              I use this stand to add a 3rd monitor to my setup. It&apos;s super
              convenient and I love that it&apos;s magnetic so I can easily move
              it around.
            </Tool>
            <Tool title="Apple Magic Keyboard w/ Touch ID">
              I use this keyboard for my main workstation. It&apos;s pretty
              basic, but I love the Touch ID.
            </Tool>
            <Tool title="MX Master 3">
              I have been using this mouse for years, and it remains my
              favorite. It is comfortable, has an excellent scroll wheel, and
              the thumb wheel is incredibly useful for navigating backward and
              forward in my browser.
            </Tool>
            <Tool title="Steelcase Leap">
              If I&apos;m going to slouch in the worst ergonomic position
              imaginable all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
