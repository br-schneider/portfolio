export const profile = {
  name: 'Brett Schneider',
  givenName: 'Brett',
  siteUrl: 'https://bretts.dev',
  title: 'CTO',
  fullTitle: 'Chief Technology Officer',
  company: {
    name: 'Analyst House',
    url: 'https://www.analysthouse.io/',
  },
  location: { city: 'Austin', region: 'Texas', country: 'US' },
  focus:
    'finance software and AI tools for accounting teams and the businesses they support',
  socials: {
    github: 'https://github.com/br-schneider',
    linkedin: 'https://linkedin.com/in/brettcschneider/',
    x: 'https://x.com/brettcschneids',
  },
}

export const profileDescription = `${profile.name} is ${profile.title} at ${profile.company.name} in ${profile.location.city}, ${profile.location.region}, building ${profile.focus}.`

export const career = [
  {
    company: profile.company.name,
    title: profile.title,
    start: '2026',
    end: 'Present',
  },
  {
    company: 'MeritFirst',
    title: 'Founding Engineer',
    start: '2025',
    end: '2026',
  },
  {
    company: 'Concentro',
    title: 'Founding Engineer',
    start: '2024',
    end: '2025',
  },
  {
    company: 'Gladiate',
    title: 'Founding Engineer',
    start: '2022',
    end: '2024',
  },
  {
    company: 'Kearney',
    title: 'Software Engineer',
    start: '2021',
    end: '2022',
  },
  {
    company: 'Dogsilly',
    title: 'Software Engineer',
    start: '2020',
    end: '2021',
  },
]

export const personalProjects = [
  {
    name: 'nextjs-nav-guard',
    description:
      'The original next-navigation-guard package was abandoned and broke on newer versions of Next.js. I forked it, fixed the runtime crashes, removed the deprecated Pages Router support, and have been maintaining it since. It gives you a simple hook to prevent users from navigating away from unsaved changes.',
    href: 'https://nextjs-nav-guard.vercel.app/',
    label: 'view project',
  },
  {
    name: 'SelfPing',
    description:
      'For a variety of reasons, I needed to be able to text myself via api. I found it annoyingly difficult to find a quick and easy solution. Here is a simple app that allows you to text yourself via api. It is cost effective and easy to use.',
    href: 'https://try.selfping.com/GWujuwd',
    label: 'selfping.com',
  },
]

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${profile.siteUrl}/#person`,
  name: profile.name,
  url: profile.siteUrl,
  jobTitle: profile.fullTitle,
  description: profileDescription,
  worksFor: {
    '@type': 'Organization',
    name: profile.company.name,
    url: profile.company.url,
  },
  homeLocation: {
    '@type': 'Place',
    name: `${profile.location.city}, ${profile.location.region}`,
  },
  sameAs: Object.values(profile.socials),
}
