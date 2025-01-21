/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['blog.webcheddar.ca', 'webcheddar.ca'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'next-webcheddar-git-main-spielbergos-projects.vercel.app', // Replace with your actual Vercel domain
          },
        ],
        destination: 'https://webcheddar.ca/',
        permanent: true,
      },
    ];
  },
  // Add other configurations here as needed
};

module.exports = nextConfig;
