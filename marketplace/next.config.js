/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // @dev - allow all domains; restrict as necessary
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // port: '',
        // pathname: '',
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  }
};

module.exports = nextConfig;
