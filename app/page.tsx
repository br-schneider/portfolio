import Article from '@/components/custom/article'
import Newsletter from '@/components/custom/newsletter'
import Photos from '@/components/custom/photos'
import Resume from '@/components/custom/resume'
import SocialLink from '@/components/custom/social-link'
import { Container } from '@/components/tailwind/container'
import { GitHubIcon, LinkedInIcon } from '@/components/tailwind/social-icons'
import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 3)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Founding Software Engineer at MeritFirst
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I’m Brett, a software engineer and entrepreneur based in Austin,
            Texas. I work on the engineering team at&nbsp;
            <Link
              className="underline hover:text-sky-500"
              href="https://www.meritfirst.us/"
            >
              MeritFirst
            </Link>
            , where we are rethinking how companies discover exceptional talent
            and building software that makes hiring simpler.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://linkedin.com/in/brettcschneider/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              title="LinkedIn"
            />
            <SocialLink
              href="https://github.com/br-schneider"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              title="GitHub"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
