/** @type {import('next').NextConfig} */

const globalHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value:
      "https://ackee.hikium.com, https://ackee.hikium.com/api, https://*.hikium.com",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET, POST, PATCH, OPTIONS",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "Content-Type, Authorization, Time-Zone",
  },
  {
    key: "Access-Control-Allow-Credentials",
    value: "true",
  },
  {
    key: "Access-Control-Max-Age",
    value: "3600",
  },
];

// Next.js configuration
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: globalHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/legal",
        destination:
          "https://hikium.notion.site/Hikium-Legal-4e1be0e09cfd4aa3a8d4b90f1b60b088",
        permanent: true,
      },
      {
        source: "/legal/:slug",
        destination:
          "https://hikium.notion.site/Hikium-Legal-4e1be0e09cfd4aa3a8d4b90f1b60b088",
        permanent: true,
      },
      {
        source: "/legal/privacy",
        destination:
          "https://hikium.notion.site/Hikium-Privacy-Statement-16749aff36504bee978e92d4a568a91a",
        permanent: true,
      },
    ];
  },
};
