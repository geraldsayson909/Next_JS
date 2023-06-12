/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['hips.heartstapps.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
      },
}

module.exports = nextConfig
