import Article from '@/components/custom/article'
import Resume from '@/components/custom/resume'
import SocialIconsRow from '@/components/custom/social-icons-row'
import { Container } from '@/components/tailwind/container'
import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 3)

  return (
    <Container className="mt-10 sm:mt-14">
      <div className="stagger">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-medium tracking-tight text-foreground">
            Founding Software Engineer at MeritFirst
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Hi, I&apos;m Brett, a software engineer and entrepreneur based in Austin,
            Texas. I work on the team at&nbsp;
            <Link
              className="underline underline-offset-2 transition-colors hover:text-foreground"
              href="https://www.meritfirst.us/?utm_source=bretts.dev"
            >
              MeritFirst
            </Link>
            , where we are rethinking how companies discover exceptional talent.
          </p>
          <div className="mt-4">
            <SocialIconsRow />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {articles.map((article) => (
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
