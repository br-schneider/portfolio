import nextMDX from '@next/mdx'

const mdxOptions = {
  remarkPlugins: [['remark-gfm']],
  rehypePlugins: [['@mapbox/rehype-prism']],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    // Enable filesystem caching for `next dev`
    turbopackFileSystemCacheForDev: true,
    // Enable filesystem caching for `next build`
    turbopackFileSystemCacheForBuild: true,
    mdxRs: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bretts.dev',
        port: '',
        pathname: '/drone/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
              '</feed.xml>; rel="alternate"; type="application/rss+xml"; title="Articles RSS feed"',
              '</sitemap.xml>; rel="describedby"; type="application/xml"',
            ].join(', '),
          },
        ],
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json' },
        ],
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: mdxOptions,
})

export default withMDX(nextConfig)
