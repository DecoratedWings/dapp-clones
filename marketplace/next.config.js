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
};

module.exports = nextConfig;
