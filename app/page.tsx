import Article from '@/components/custom/article'
import Newsletter from '@/components/custom/newsletter'
import Photos from '@/components/custom/photos'
import Resume from '@/components/custom/resume'
import SocialLink from '@/components/custom/social-link'
import { GitHubIcon, LinkedInIcon } from '@/components/tailwind/SocialIcons'
import { Container } from '@/components/tailwind/container'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)
  console.log(`🔥 articles -> `, articles)

  return (
    <>
      {/* <Head>
        <title>Brett Schneider - Software Engineer</title>
        <meta
          name="description"
          content="I’m Brett, a software engineer and entrepreneur based in Austin.
            I work on the Gladiate Law team, where we develop technologies that
            empower attorneys to practice law on their own terms."
        />
      </Head> 

      */}
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Founding Software Engineer at Gladiate Law.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Brett, a software engineer and entrepreneur based in Austin. I
            work on the Gladiate Law team, where we develop technologies that
            empower attorneys to practice law on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/br-schneider"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              title="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/brettcschneider/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              title="LinkedIn"
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