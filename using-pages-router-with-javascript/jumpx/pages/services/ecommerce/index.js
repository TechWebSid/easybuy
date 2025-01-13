import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../components/Layouts/Navbar";
import Link from "next/link";

const EcommerceServices = () => {
  const services = [
    {
      title: "Custom E-commerce Development",
      image: "/images/services/ecommerce/custom-development.jpg",
      items: [
        {
          name: "Tailored Online Stores",
          description: "Custom-built e-commerce solutions designed specifically for your business needs, with scalable architecture and seamless user experience.",
        },
        {
          name: "Core Features",
          description: "Advanced product management, multi-vendor support, inventory tracking, order management, and secure payment gateway integration.",
        },
      ],
    },
    {
      title: "Shopify Development",
      image: "/images/services/ecommerce/shopify.jpg",
      items: [
        {
          name: "Shopify Solutions",
          description: "Expert Shopify store development with custom themes, apps, and integrations to create a unique shopping experience.",
        },
        {
          name: "Key Features",
          description: "Custom theme development, app integration, payment gateway setup, inventory management, and marketing tools implementation.",
        },
      ],
    },
    {
      title: "WooCommerce Solutions",
      image: "/images/services/ecommerce/woocommerce.jpg",
      items: [
        {
          name: "WordPress E-commerce",
          description: "Professional WooCommerce development for scalable and flexible online stores built on WordPress.",
        },
        {
          name: "Advanced Features",
          description: "Custom plugin development, theme customization, payment gateway integration, and shipping solution implementation.",
        },
      ],
    },
    {
      title: "Mobile Commerce",
      image: "/images/services/ecommerce/mobile-commerce.jpg",
      items: [
        {
          name: "Mobile Shopping Apps",
          description: "Native and cross-platform e-commerce apps that provide seamless mobile shopping experiences.",
        },
        {
          name: "Features",
          description: "Push notifications, mobile payments, offline capabilities, and synchronized shopping cart across devices.",
        },
      ],
    }
  ];

  return (
    <>
      <Head>
        <title>E-commerce Development Services | Online Store Solutions | Easy2BuyHub</title>
        <meta 
          name="description" 
          content="Transform your retail business with our professional e-commerce development services. Custom online stores, Shopify, WooCommerce, and mobile commerce solutions. Get started today!" 
        />
        <meta 
          name="keywords" 
          content="e-commerce development, online store development, Shopify development, WooCommerce development, mobile commerce, e-commerce solutions, online shopping platform, e-commerce website India, custom e-commerce, digital commerce, online retail solutions, e-commerce integration, payment gateway integration, shopping cart development, multi-vendor marketplace" 
        />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional E-commerce Development Services | Easy2BuyHub" />
        <meta property="og:description" content="Build your online store with our expert e-commerce development services. Custom solutions, Shopify, WooCommerce, and mobile commerce development." />
        <meta property="og:image" content="https://www.easy2buyhub.com/images/services/ecommerce/og-image.jpg" />
        <meta property="og:url" content="https://www.easy2buyhub.com/services/ecommerce" />
        
        <link rel="canonical" href="https://www.easy2buyhub.com/services/ecommerce" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "E-commerce Development Services",
              "provider": {
                "@type": "Organization",
                "name": "Easy2BuyHub",
                "url": "https://www.easy2buyhub.com"
              },
              "description": "Professional e-commerce development services including custom solutions, Shopify, and WooCommerce development",
              "areaServed": "IN",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "E-commerce Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom E-commerce Development",
                      "description": "Tailored online store solutions for businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Development",
                      "description": "Professional Shopify store development and customization"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="ecommerce-services">
        <div className="container">
          <header className="section-title">
            <h1>E-commerce Development Services</h1>
            <p>
              Launch your online store with our comprehensive e-commerce solutions. 
              From custom development to popular platforms like Shopify and WooCommerce, 
              we help you create powerful online shopping experiences.
            </p>
          </header>

          <section className="services-grid" aria-label="E-commerce Development Services">
            {services.map((service, index) => (
              <article className="service-card" key={index}>
                <div className="image-wrapper">
                  <Image 
                    src={service.image}
                    alt={`${service.title} - Easy2BuyHub E-commerce Solutions`}
                    width={400}
                    height={300}
                    loading={index <= 2 ? "eager" : "lazy"}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURCNz5GPjIxTU9HRVBVWFFQT05jbnNmUVBZYV3/2wBDARUXFx4aHR4eHV1CJzwnQl1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    className="service-image"
                  />
                </div>
                <div className="service-card-content">
                  <h2>{service.title}</h2>
                  {service.items.map((item, idx) => (
                    <div className="service-item" key={idx}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      {idx === 0 && (
                        <Link href="/quotation" className="purchase-button">
                          Get Started <span className="sr-only">with {service.title}</span> →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2>Why Choose Our E-commerce Solutions?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <Image 
                  src="/images/icons/secure.svg"
                  alt="Secure E-commerce"
                  width={40}
                  height={40}
                />
                <h3>Secure Payments</h3>
                <p>PCI compliant payment processing with multiple gateway options</p>
              </div>
              {/* Add more feature items */}
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="faq-section" aria-label="Frequently Asked Questions">
            <h2>Common Questions About E-commerce Development</h2>
            <div className="faq-grid">
              <details>
                <summary>How long does it take to build an e-commerce website?</summary>
                <p>Development timeline varies based on complexity. Basic stores take 4-6 weeks, while custom solutions may take 8-12 weeks.</p>
              </details>
              <details>
                <summary>Which e-commerce platform is best for my business?</summary>
                <p>The choice depends on your specific needs. We'll help you choose between custom solutions, Shopify, or WooCommerce based on your requirements and budget.</p>
              </details>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        /* Your existing styles plus: */
        .ecommerce-services {
          padding: 80px 20px;
          background: linear-gradient(to bottom, #f8f9ff, #ffffff);
        }

        .features-section {
          margin-top: 80px;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .feature-item {
          padding: 30px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
        }

        /* Add responsive styles */
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default EcommerceServices; 