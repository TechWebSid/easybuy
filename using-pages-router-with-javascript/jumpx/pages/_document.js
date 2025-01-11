import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> {/* Set the correct language code */}
        <Head>
          {/* Global Meta Tags for SEO */}
          <meta name="description" content="Easy2BuyHub - Your One-Stop Shop for All Your Business Solutions" />
          <meta name="keywords" content="Easy2BuyHub, web solutions, website development, e-commerce, custom websites" />
          <meta name="author" content="Easy2BuyHub Team" />
          
          {/* Open Graph Tags for Social Media Sharing */}
          <meta property="og:title" content="Easy2BuyHub - Your One-Stop Shop for All Your Web Solutions" />
          <meta property="og:description" content="Easy2BuyHub provides customized web development, e-commerce solutions, and more to help you grow your online business." />
          <meta property="og:image" content="/images/public/favicon.png" />
          <meta property="og:url" content="https://www.easy2buyhub.com" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@easy2buyhub" />
          <meta name="twitter:title" content="Easy2BuyHub - Your One-Stop Shop for All Your Web Solutions" />
          <meta name="twitter:description" content="Easy2BuyHub offers web solutions to help you build your online presence, from websites to e-commerce platforms." />
          <meta name="twitter:image" content="/images/twitter-image.png" />
          
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
          />
          
          {/* Favicon */}
          <link rel="icon" type="image/png" href="/images/public/favicon.png" />
          
          {/* Additional Meta Tags */}
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
