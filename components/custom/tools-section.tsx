import { useId } from 'react'

export function ToolsSection({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  const id = useId()

  return (
    <section
      aria-labelledby={id}
      className="grid grid-cols-1 gap-5 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-8"
    >
      <h2 id={id} className="text-muted-foreground pt-2 text-xs font-medium">
        {title}
      </h2>
      <ul role="list" className="flex min-w-0 flex-col gap-4">
        {children}
      </ul>
    </section>
  )
}
