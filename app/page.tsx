import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import Newsletter from '@/components/home/Newsletter'
import Photos from '@/components/home/Photos'
import Resume from '@/components/home/Resume'
import { Metadata } from 'next'
import Link from 'next/link'
// import Link from 'next/link'

const description = `I’m Brett, a software engineer and entrepreneur based in Austin. I work on the Gladiate Law team, where we develop technologies that empower attorneys to practice law on their own terms.`

export const metadata: Metadata = {
  title: 'Brett Schneider - Software Engineer',
  description: description,
}

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   )
// }

// function ArrowDownIcon(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link href={''} target={'_blank'} className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// async function getPosts() {
//   // if (process.env.NODE_ENV === 'production') {
//   //   await generateRssFeed()
//   // }

//   const res = await getAllArticles()

//   const posts = res.slice(0, 4).map(({ component, ...meta }) => meta)

//   return posts
// }

export default async function Page() {
  // Fetch data directly in a Server Component
  // const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Founding Software Engineer at Gladiate Law.
          </h1>
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/br-schneider"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/brettcschneider/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {recentPosts.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
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
