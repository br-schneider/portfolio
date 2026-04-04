import { Button } from '@/components/tailwind/button'
import { Container } from '@/components/tailwind/container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-24">
      <div className="flex flex-col items-center">
        <p className="text-muted-foreground text-base font-medium">404</p>
        <h1 className="text-foreground mt-4 text-2xl font-medium tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground mt-4 text-base">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
