import nextMDX from '@next/mdx'

const mdxOptions = {
  remarkPlugins: [['remark-gfm']],
  rehypePlugins: [['@mapbox/rehype-prism']],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
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
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: mdxOptions,
})

export default withMDX(nextConfig)
