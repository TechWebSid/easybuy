/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://easy2buyhub.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/server-sitemap.xml',
    '/admin/*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/private/*',
          '/*.json$',
          '/*.xml$'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/*'],
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      'https://easy2buyhub.com/server-sitemap.xml',
      'https://easy2buyhub.com/blog-sitemap.xml'
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/services/seo': 0.9,
      '/services/fullstack': 0.9,
      '/services/digital-marketing': 0.9,
      '/services/api': 0.9,
      '/services/ecommerce': 0.9,
      '/about': 0.8,
      '/contact': 0.8,
      '/blog': 0.8,
      '/careers': 0.7
    };

    // Custom change frequencies
    const changefreqs = {
      '/': 'daily',
      '/blog': 'daily',
      '/services': 'weekly',
      '/about': 'monthly',
      '/contact': 'monthly'
    };

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://easy2buyhub.com${path}`,
          hreflang: 'en'
        },
        {
          href: `https://easy2buyhub.com/hi${path}`,
          hreflang: 'hi'
        }
      ],
    }
  },
}
  