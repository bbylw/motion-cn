/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath and assetPrefix will be set dynamically for GitHub Pages
}

module.exports = nextConfig
