/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import logoAscendant from '@/images/logos/ascendant.png'
import logoCervello from '@/images/logos/cervello.png'
import logoGladiate from '@/images/logos/gladiate.png'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { handleDownload } from '@/lib/miscUtils'
import { ArrowDownIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../Button'

export default function Resume() {
  const resume: {
    company: string
    title: string
    logo: StaticImageData
    start:
      | {
          label?: string
          dateTime?: string
        }
      | string
    end:
      | {
          label?: string
          dateTime?: string
        }
      | string
  }[] = [
    {
      company: 'Gladiate',
      title: 'Software Engineer',
      logo: logoGladiate,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Cervello',
      title: 'Software Engineer',
      logo: logoCervello,
      start: '2021',
      end: '2022',
    },
    {
      company: 'dogsilly',
      title: 'Software Engineer',
      logo: logoPlanetaria,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Ascendant Capital',
      title: 'Business Intelligence Intern',
      logo: logoAscendant,
      start: '2019',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                // @ts-ignore
                aria-label={`${role.start.label ?? role.start} until ${
                  //  @ts-ignore
                  role.end.label ?? role.end
                }`}
              >
                {/*  @ts-ignore */}
                <time dateTime={role.start.dateTime ?? role.start}>
                  {/*  @ts-ignore */}
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span> {/*  @ts-ignore */}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {/*  @ts-ignore */}
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <div onClick={handleDownload}>
        <Button href={''} variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}
