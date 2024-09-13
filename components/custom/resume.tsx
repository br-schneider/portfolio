'use client'

import logoCervello from '@/images/logos/cervello.png'
import logoConcentro from '@/images/logos/concentro-black.png'
import logoGladiate from '@/images/logos/gladiate.png'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import Image from 'next/image'
import ArrowDownIcon from '../icons/arrow-down-icon'
import BriefcaseIcon from '../icons/briefcase-icon'
import { Button } from '../tailwind/button'

function formatDate(date: any) {
  return typeof date === 'object' ? date.label : date
}

function getDateTime(date: any) {
  return typeof date === 'object' ? date.dateTime : date
}

export default function Resume() {
  const resume = [
    {
      company: 'Concentro',
      title: 'Founding Software Engineer',
      logo: logoConcentro,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Gladiate',
      title: 'Founding Software Engineer',
      logo: logoGladiate,
      start: '2022',
      end: '2024',
    },
    {
      company: 'Cervello',
      title: 'Software Engineer',
      logo: logoCervello,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Dogsilly',
      title: 'Software Engineer',
      logo: logoPlanetaria,
      start: '2020',
      end: '2021',
    },
  ]

  const handleDownload = () => {
    fetch('/brett_schneider_resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = "Brett Schneider's Resume.pdf"
        alink.click()
      })
    })
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
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
                aria-label={`${formatDate(role.start)} until ${formatDate(
                  role.end,
                )}`}
              >
                <time dateTime={getDateTime(role.start)}>
                  {formatDate(role.start)}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={getDateTime(role.end)}>
                  {formatDate(role.end)}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <div onClick={handleDownload}>
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}
