import { Container } from './container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-10 sm:mt-14">
      <div className="stagger">
        <header className="max-w-2xl">
          <h1 className="text-2xl font-medium tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            {intro}
          </p>
        </header>
        {children && <div className="mt-12 sm:mt-16">{children}</div>}
      </div>
    </Container>
  )
}
