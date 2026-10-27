# My Site

Personal website and writing by Brett Schneider, CTO at Analyst House.

This website is built using some of my favorite web technologies and frameworks, including [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## Profile and LLM docs

Edit `lib/profile.ts` to update the current role, public profiles, work history, and personal projects. That data feeds the site metadata, Person JSON-LD, homepage, work list, software page, and the `/llms.txt` and `/llms-full.txt` routes. The LLM docs are generated during the build and include the current article index.

The short document introduces the site and links to its main pages. The expanded document also includes work history, project descriptions, and public profiles. Pages support `Accept: text/markdown` for reading their full text. The homepage advertises `/llms.txt` in its HTTP Link header, and each page includes an HTML discovery link.

## Refresh social images

Run `pnpm social:images` to screenshot the current homepage in light mode at 2400 × 1260. An 800 × 420 viewport at 3× resolution keeps the framing tight and the text crisp on Retina screens. It reuses the local site on port 3000 or starts a temporary preview and stops it when finished.

The command replaces `app/opengraph-image.png` and `app/twitter-image.png`, which Next.js includes in link preview metadata, and saves `~/Desktop/portfolio-linkedin.png` for manual uploads to LinkedIn. Commit and push the generated app images to publish them.

All outputs use light mode. Use `pnpm social:images --url https://www.bretts.dev` to capture the published homepage instead of local changes. Open Graph has no theme preference for preview images, so the app uses the same light image for every viewer.

After installing dependencies for the first time, run `pnpm exec playwright install chromium` to install the screenshot browser. If LinkedIn still shows an older preview after deployment, refresh the page URL in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
