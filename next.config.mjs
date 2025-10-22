import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack: (config) => {
    return config
  },
}

const withMDX = nextMDX()

export default withMDX(nextConfig)
