import { Section } from '../tailwind/section'

export function ToolsSection({
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
