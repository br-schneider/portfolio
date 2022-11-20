import Image from 'next/future/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoApollo from '@/images/logos/apollo.png'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// const projects = [
//   {
//     name: 'dogsilly',
//     description:
//       'Built out a full fledged e-commerce site for a clothing brand. The site leverages CommerceJs and Stripe to handle purchases.',
//     link: { href: 'https://dogsilly.com', label: 'dogsilly.com' },
//     logo: logoPlanetaria,
//   },
//   {
//     name: 'Apollo Funding Partners',
//     description:
//       'This website was built for a loan sourcing company. It was built using Next.js and TailwindCSS.',
//     link: {
//       href: 'https://apollofundingpartners.com',
//       label: 'apollofundingpartners.com',
//     },
//     logo: logoApollo,
//   },
//   {
//     name: 'This Website',
//     description:
//       'Written using all of my favorite technologies. It is a site generated with Next.js, styled with Tailwind CSS, and hosted on Netlify.',
//     link: {
//       href: 'https://github.com/br-schneider/portfolio',
//       label: 'github.com',
//     },
//     logo: logoAnimaginary,
//   },
// ]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const { isLoading, error, data, isFetching } = useQuery(['projects'], () =>
    axios
      .get(
        'https://brett-portfolio-backend.herokuapp.com/api/projects?populate=*',
        {
          headers: {
            // Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        }
      )
      .then((res) => {
        return res.data.data
      })
  )

  const projects = data

  return (
    <>
      <Head>
        <title>Projects - Brett Schneider</title>
        <meta name="description" content="Things I’ve worked on." />
      </Head>
      <SimpleLayout
        title="Things I’ve worked on."
        intro="I've worked on many projects over the years. Here are a few of my favorites."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects &&
            projects.map((project) => {
              const imageUrl = project?.attributes?.icon?.data?.attributes?.url

              return (
                <Card as="li" key={project.id}>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={imageUrl}
                      alt=""
                      className="w-8 h-8"
                      width={32}
                      height={32}
                      unoptimized
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link
                      target={'_blank'}
                      href={project?.attributes?.link?.href || '#'}
                    >
                      {project?.attributes?.title}
                    </Card.Link>
                  </h2>
                  <Card.Description>
                    {project?.attributes?.description}
                  </Card.Description>
                  <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="flex-none w-6 h-6" />
                    <span className="ml-2">
                      {project?.attributes?.link?.label}
                    </span>
                  </p>
                </Card>
              )
            })}
        </ul>
      </SimpleLayout>
    </>
  )
}
