/* eslint-disable react/prop-types */

import { Card } from '@/components/tailwind/card'
import { Section } from '@/components/tailwind/Section'
import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { Metadata } from 'next'

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
      <ul role="list" className="space-y-16 pt-5">
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
    <Card as="li" className="">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, and things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="flex flex-col space-y-10">
        <ToolsSection title="Engineering">
          <Tool title="TailwindCSS" href="https://tailwindcss.com/">
            I rely on Tailwind for all my projects. I am sure you know it by
            now! I use it for all my projects, and it is a great tool for
            quickly building beautiful interfaces.
          </Tool>
          <Tool title="Shadcn" href="https://ui.shadcn.com/">
            Beautifully designed components that you can copy and paste into
            your projects. They are simple, clean, and easy to use.
          </Tool>
          <Tool title="Hono" href="https://hono.dev/">
            Hono is a modern, open-source web framework for building just about
            anything. It has a beautiful DX and has some of the best typescript
            support I have seen in a while.
          </Tool>
          <Tool title="Nextjs" href="https://nextjs.org/">
            Next.js is my go-to for all React projects. It is an excellent
            framework for developing static, server-rendered, and hybrid React
            applications.
          </Tool>
          <Tool title="Vercel" href="https://vercel.com/">
            I use Vercel for most of my websites. It is highly flexible and
            user-friendly, capable of scaling with my site and providing
            numerous outstanding features out of the box.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="v0" href="https://v0.dev/">
            I find v0 to be a great tool for creating beautiful designs. It can
            be used by just about anyone and helps you get going on building
            features.
          </Tool>
          <Tool title="Figma" href="https://www.figma.com/">
            Figma is my preferred tool for all design work, including
            wireframes, prototypes, and final designs. It is an excellent
            platform for collaboration with others.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Analytics">
          <Tool title="Dub" href="https://dub.co">
            Dub is a fun way to see who clicks on your links. They have built a
            truly amazing platform, loaded with features for every use case.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Utilities">
          <Tool
            title="Monitor Control"
            href="https://github.com/MonitorControl/MonitorControl"
          >
            Monitor Control is a macOS app that allows you to control your
            external monitor&apos;s brightness, contrast, and volume. It is a
            fantastic tool for managing your monitor settings.
          </Tool>
          <Tool title="Raycast" href="https://www.raycast.com/">
            Raycast is a productivity tool for macOS that lets you control your
            tools with a few keystrokes. It is a fantastic way to save time and
            stay focused on your work.
          </Tool>
          <Tool title="Rectangle" href="https://rectangleapp.com/">
            Rectangle is a window management app for macOS that allows you to
            move and resize windows with ease.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
