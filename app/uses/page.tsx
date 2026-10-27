import { type Metadata } from 'next'
import { Tool } from '@/components/custom/tool'
import { ToolsSection } from '@/components/custom/tools-section'
import { SimpleLayout } from '@/components/tailwind/simple-layout'

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The tools I use to design, build, and ship software.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I reach for."
      intro="The tools I use to design, build, and ship software."
    >
      <div className="flex flex-col gap-12">
        <ToolsSection title="Building">
          <Tool
            title="Rex by Superlogical"
            href="https://www.superlogical.com/?utm_source=bretts.dev"
            logo="/logos/rex.png"
          >
            My workspace for terminals and coding agents, with persistent
            sessions I can pick up across devices.
          </Tool>
          <Tool
            title="Next.js"
            href="https://nextjs.org/?utm_source=bretts.dev"
            logo="/logos/nextjs.svg"
          >
            My starting point for React apps, from a small side project to a
            full product.
          </Tool>
          <Tool
            title="Tailwind CSS"
            href="https://tailwindcss.com/?utm_source=bretts.dev"
            logo="/logos/tailwind.svg"
          >
            How I style pretty much everything. Fast to build with and easy to
            keep consistent.
          </Tool>
          <Tool
            title="shadcn/ui"
            href="https://ui.shadcn.com/?utm_source=bretts.dev"
            logo="/logos/shadcn.svg"
          >
            The components I start with, then make my own.
          </Tool>
          <Tool
            title="Hono"
            href="https://hono.dev/?utm_source=bretts.dev"
            logo="/logos/hono.svg"
          >
            My pick for lightweight APIs. Simple to work with, with great
            TypeScript support.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Infra">
          <Tool
            title="Zero Sync"
            href="https://zero.rocicorp.dev/?utm_source=bretts.dev"
            logo="/logos/zero.svg"
          >
            Instant-feeling interfaces, with local reads and writes that sync in
            the background.
          </Tool>
          <Tool
            title="PlanetScale"
            href="https://planetscale.com/?utm_source=bretts.dev"
            logo="/logos/planetscale.svg"
          >
            Managed databases that let me spend more time on the product.
          </Tool>
          <Tool
            title="Unkey"
            href="https://unkey.com/?utm_source=bretts.dev"
            logo="/logos/unkey.svg"
          >
            My go-to for API keys, rate limits, and usage tracking.
          </Tool>
          <Tool
            title="Vercel"
            href="https://vercel.com/?utm_source=bretts.dev"
            logo="/logos/vercel.svg"
          >
            Where I deploy most of my websites. Easy to get live and keep
            shipping.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool
            title="v0"
            href="https://v0.dev/?utm_source=bretts.dev"
            logo="/logos/v0.svg"
          >
            A quick way to turn an idea into an interface I can actually try.
          </Tool>
          <Tool
            title="Paper"
            href="https://paper.design/?utm_source=bretts.dev"
            logo="/logos/paper.png"
          >
            A design canvas built on HTML and CSS, with agents connected
            directly to the work.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Analytics">
          <Tool
            title="Dub"
            href="https://dub.co?utm_source=bretts.dev"
            logo="/logos/dub.png"
          >
            Short links and a clear view of what people click.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
