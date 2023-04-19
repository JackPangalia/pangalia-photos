/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['firebasestoreage.googleapis.com'],
  }
}

module.exports = nextConfig
