/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr", "de"],
    defaultLocale: "en",
    localeDetection: false, // 🌟 Tarayıcı dil algılamasını kapatıyoruz
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

