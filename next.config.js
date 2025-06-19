/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/Tanoxi-Technology',
    assetPrefix: '/Tanoxi-Technology'
  } : {
    // Development configuration
    images: {
      unoptimized: true,
    }
  })
}

module.exports = nextConfig
