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
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: globalHeaders,
      },
    ];
  },
};
