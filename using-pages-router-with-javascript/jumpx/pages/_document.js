import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Enhanced Meta Tags for SEO */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="description" content="Easy2BuyHub - Premier IT Solutions & Digital Services Company. Expert Web Development, SEO, Digital Marketing, Full Stack Development & Business Solutions. Transform your business with our innovative tech solutions." />
          <meta name="keywords" content="web development company, IT services, digital marketing agency, SEO services India, full stack development, website design company, ecommerce development, React.js development, Node.js development, business IT solutions, affordable web development, digital transformation services, mobile app development, cloud solutions, UI/UX design, IT consulting services, digital marketing strategy, local SEO services, content marketing, social media marketing" />
          <meta name="author" content="Easy2BuyHub" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://www.easy2buyhub.com" />
          
          {/* Enhanced Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Easy2BuyHub" />
          <meta property="og:title" content="Easy2BuyHub - Leading IT Solutions & Digital Services Company | Web Development, SEO, Digital Marketing" />
          <meta property="og:description" content="Transform your business with Easy2BuyHub's comprehensive IT solutions. Expert web development, SEO, digital marketing, and full-stack development services tailored for your success." />
          <meta property="og:image" content="https://www.easy2buyhub.com/images/og-image.jpg" />
          <meta property="og:url" content="https://www.easy2buyhub.com" />
          
          {/* Enhanced Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@easy2buyhub" />
          <meta name="twitter:creator" content="@easy2buyhub" />
          <meta name="twitter:title" content="Easy2BuyHub - Complete IT & Digital Solutions" />
          <meta name="twitter:description" content="Your trusted partner for web development, SEO, digital marketing & IT solutions. Transform your business with Easy2BuyHub." />
          <meta name="twitter:image" content="https://www.easy2buyhub.com/images/twitter-card.jpg" />
          
          {/* Structured Data - Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Easy2BuyHub",
                "url": "https://www.easy2buyhub.com",
                "logo": "https://www.easy2buyhub.com/images/logo.png",
                "sameAs": [
                  "https://www.facebook.com/easy2buyhub",
                  "https://twitter.com/easy2buyhub",
                  "https://www.linkedin.com/company/easy2buyhub",
                  "https://www.instagram.com/easy2buyhub"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8317068532",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Industrial Area Near Sitapur City Mall, Lakhimpur Road",
                  "addressLocality": "Sitapur",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "261001",
                  "addressCountry": "IN"
                }
              })
            }}
          />

          {/* Structured Data - WebSite */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://www.easy2buyhub.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.easy2buyhub.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
          
          {/* Preconnect to Important Third-party Domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Fonts with Display Swap */}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Dosis:wght@400;500;600;700&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          
          {/* Favicon Tags - Comprehensive Setup */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />

          {/* For iOS */}
          <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Easy2BuyHub" />

          {/* For Android */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Easy2BuyHub" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
