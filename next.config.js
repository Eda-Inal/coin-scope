/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr", "de"],
    defaultLocale: "en",
    localeDetection: false, 
  },
  images: {
    domains: ['coin-images.coingecko.com'], 
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

