/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your existing Next.js configuration options can be added here if needed
  };
  
  module.exports = {
    ...nextConfig,
    async rewrites() {
      return [
        {
          source: "/hello/:path*",
          destination: "http://localhost:5000/hello/:path*",
        },
      ];
    },
  };
  