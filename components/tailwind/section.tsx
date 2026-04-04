import { useId } from 'react'

export function Section({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  const id = useId()

  return (
    <section aria-labelledby={id}>
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-sm font-medium text-foreground"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
