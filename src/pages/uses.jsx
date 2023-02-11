/* eslint-disable react/prop-types */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
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
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. The M1 Pro is a beast. I&apos;m able
              to run multiple VMs, run a bunch of Docker containers, and have a
              bunch of browser tabs open without any slowdown.
            </Tool>
            <Tool title="11” iPad Pro">
              I use this for reading, writing, and taking notes. I also use it
              as a second screen for my laptop. I&apos;m a big fan of the Apple
              Pencil and the Smart Keyboard Folio.
            </Tool>
            <Tool title="LG 4k HDR Monitors">
              I use these monitors for my main display. They&apos;re great for
              development and I love the HDR support. Also always gotta have
              that one vertical monitor.
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
              I&apos;ve been using this mouse for years and it&apos;s still my
              favorite. It&apos;s comfortable, has a great scroll wheel, and the
              thumb wheel is super useful for navigating back and forward in my
              browser.
            </Tool>
            <Tool title="Steelcase Leap">
              If I&apos;m going to slouch in the worst ergonomic position
              imaginable all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Frameworks">
            <Tool title="TailwindCSS">
              I use Tailwind for almost all of my projects. It&apos;s a great
              utility-first CSS framework that makes it easy to build
              responsive, accessible, and performant interfaces.
            </Tool>
            <Tool title="Next.js">
              I use Next.js for all of my React projects. It&apos;s a great
              framework for building static and server-rendered React apps.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development">
            <Tool title="VS Code">
              I use VS Code for all of my development. I love the extensibility
              and the fact that it’s open source. I use the Material Theme
              extension and the Material Icon Theme extension.
            </Tool>
            <Tool title="GitHub Copilot">
              I&apos;ve been using GitHub Copilot for a few months now and
              I&apos;m absolutely in love with it. It&apos;s a game changer for
              me. I use it for everything from writing blog posts to building
              out new features in my apps.
            </Tool>
            <Tool title="Vercel">
              I use Vercel for most of my sites. It&apos;s very flexible and
              easy to use. It can scale with your site and also offers a lot of
              great features out of the box.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I use Figma for all of my design work, including wireframes,
              prototypes, and final designs. It&apos;s a great tool for
              collaborating with others.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
