/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Tanoxi-Technology' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Tanoxi-Technology/' : '',
}

module.exports = nextConfig
