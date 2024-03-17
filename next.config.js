/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['shop.webcheddar.ca', 'webcheddar.ca'], // List of domains from where images can be loaded
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Different screen sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Widths for different image sizes
    path: '/_next/image', // The path where to load the images from
    loader: 'default', // The loader to use for the images, use 'default' unless you have a custom image loader
  },
  trailingSlash: true,  
  // Add other configurations here as needed
};

// module.exports = {
  
// }