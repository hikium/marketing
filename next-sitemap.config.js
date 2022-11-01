/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.hikium.com",
  changefreq: "weekly",
  exclude: ["/500"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
