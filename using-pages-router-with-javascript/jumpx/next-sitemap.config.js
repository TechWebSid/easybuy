/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://easy2buyhub.com', // Replace with your website's URL
    generateRobotsTxt: true, // Generate robots.txt along with sitemap
    exclude: [], // Pages to exclude from the sitemap
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
  };
  