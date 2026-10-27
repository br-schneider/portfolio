import Article from '@/components/custom/article'
import Resume from '@/components/custom/resume'
import SocialIconsRow from '@/components/custom/social-icons-row'
import { Container } from '@/components/tailwind/container'
import { getAllArticles } from '@/lib/articles'
import { profile } from '@/lib/profile'
import Link from 'next/link'

export default async function Home() {
  const allArticles = await getAllArticles()
  const displayedArticles = allArticles.slice(0, 3)

  return (
    <Container className="mt-10 sm:mt-14">
      <div className="stagger">
        <div className="max-w-2xl">
          <h1 className="text-foreground text-2xl font-medium tracking-tight">
            {profile.title} at {profile.company.name}
          </h1>
          <p className="text-muted-foreground mt-4 text-base">
            Hi, I&apos;m {profile.givenName}, an entrepreneur based in{' '}
            {profile.location.city}, {profile.location.region}. I&apos;m{' '}
            {profile.title} at{' '}
            <Link
              className="hover:text-foreground underline underline-offset-2 transition-colors"
              href={`${profile.company.url}?utm_source=bretts.dev`}
            >
              {profile.company.name}
            </Link>
            , building {profile.focus}.
          </p>
          <div className="mt-4">
            <SocialIconsRow />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {displayedArticles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-14">
          <Resume />
        </div>
      </div>
    </Container>
  )
}
