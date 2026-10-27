import { type ArticleWithSlug } from '@/lib/articles'
import {
  career,
  personalProjects,
  profile,
  profileDescription,
} from '@/lib/profile'

function siteLink(path: string) {
  return new URL(path, profile.siteUrl).href
}

export function renderLlmDocument(articles: ArticleWithSlug[], full = false) {
  const sections = [
    `# ${profile.name}\n\n> ${profileDescription}`,
    `This is ${profile.name}'s personal website. His current role is ${profile.title} at [${profile.company.name}](${profile.company.url}). Articles are dated and may discuss earlier roles; the current profile and work history reflect his present role.`,
    `## Profile and site\n\n- [Home](${siteLink('/')}): Current introduction and work history.\n- [About](${siteLink('/about')}): Background and approach to building products.\n- [Personal software](${siteLink('/software')}): Open-source and personal projects.\n- [Uses](${siteLink('/uses')}): Engineering tools and infrastructure.\n- [Writing](${siteLink('/articles')}): Articles on software, product, and business.\n- [Expanded profile](${siteLink('/llms-full.txt')}): Career history, project descriptions, and the writing index.`,
    `## Reading the site\n\nRequest a page with the HTTP header \`Accept: text/markdown\` to receive its text content as Markdown. The same URL without that header returns the normal web page.\n\n- [RSS feed](${siteLink('/feed.xml')})\n- [Sitemap](${siteLink('/sitemap.xml')})`,
  ]

  if (full) {
    sections.push(
      `## Work history\n\n${career.map((role) => `- ${role.company}: ${role.title}, ${role.start} to ${role.end.toLowerCase()}.`).join('\n')}`,
      `## Personal software\n\n${personalProjects.map((project) => `### [${project.name}](${project.href})\n\n${project.description}`).join('\n\n')}`,
      `## Public profiles\n\n- [GitHub](${profile.socials.github})\n- [LinkedIn](${profile.socials.linkedin})\n- [X](${profile.socials.x})`,
    )
  }

  sections.push(
    `## Writing\n\n${articles.map((article) => `- [${article.title}](${siteLink(`/articles/${article.slug}`)}) (${article.date}): ${article.description}`).join('\n')}`,
  )

  return `${sections.join('\n\n')}\n`
}
