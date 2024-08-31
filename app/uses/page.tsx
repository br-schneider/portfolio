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
          <Tool title="Warp" href="https://www.warp.dev/">
            Warp is a modern, Rust-based terminal with AI built in that makes it
            easier to navigate and manage your terminal sessions. It is
            incredibly fast and has a beautiful interface.
          </Tool>
          <Tool title="Shadcn" href="https://ui.shadcn.com/">
            Beautifully designed components that you can copy and paste into
            your projects. They are simple, clean, and easy to use.
          </Tool>
          <Tool title="TailwindCSS" href="https://tailwindcss.com/">
            I rely on Tailwind for all my projects. It is an outstanding
            utility-first CSS framework that simplifies the creation of
            responsive, accessible, and high-performance interfaces.
          </Tool>
          <Tool title="Nextjs" href="https://nextjs.org/">
            Next.js is my go-to for all React projects. It is an excellent
            framework for developing static and server-rendered React
            applications.
          </Tool>
          <Tool title="Vercel" href="https://vercel.com/">
            I use Vercel for most of my websites. It is highly flexible and
            user-friendly, capable of scaling with my site and providing
            numerous outstanding features out of the box.
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
        <ToolsSection title="Design">
          <Tool title="Figma" href="https://www.figma.com/">
            Figma is my preferred tool for all design work, including
            wireframes, prototypes, and final designs. It is an excellent
            platform for collaboration with others.
          </Tool>
          <Tool title="Visily" href="https://www.visily.ai/">
            Visily is an AI tool that generates beautiful, high-quality UI
            designs in seconds. It is incredibly fast and easy to use.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Random Things I Like">
          <Tool
            title="Monaspace Font"
            href="https://github.com/githubnext/monaspace"
          >
            Monaspace is a beautiful monospaced font that I use in Visual Studio
            Code. It is easy to read and makes my code look great.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
