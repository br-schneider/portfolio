# My Site

Welcome to my website! I'm excited to share with you some of my thoughts I have developed as a founding engineer.

This website is built using some of my favorite web technologies and frameworks, including [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

I hope you enjoy exploring my portfolio and gaining a better understanding of my work. If you have any questions or comments, please don't hesitate to reach out. I'm always happy to connect with others!

## Refresh social images

Run `pnpm social:images` to screenshot the current homepage at 2400 × 1260, using a 1200 × 630 viewport at 2× resolution for crisp text on Retina screens. It reuses the local site on port 3000 or starts a temporary preview and stops it when finished.

The command replaces `app/opengraph-image.png` and `app/twitter-image.png`, which Next.js includes in link preview metadata, and saves `~/Desktop/portfolio-linkedin.png` for manual uploads to LinkedIn. Commit and push the generated app images to publish them.

The default is dark mode. Use `pnpm social:images --theme light` for light mode, or `pnpm social:images --url https://www.bretts.dev` to capture the published homepage instead of local changes.

After installing dependencies for the first time, run `pnpm exec playwright install chromium` to install the screenshot browser. If LinkedIn still shows an older preview after deployment, refresh the page URL in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
