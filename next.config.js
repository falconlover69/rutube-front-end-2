/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
  },
  images: {
    domains: ['localhost']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost4200/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost4200/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig
