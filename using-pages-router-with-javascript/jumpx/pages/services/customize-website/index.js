import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../components/Layouts/Navbar";
import Link from "next/link";

const CustomWebsiteServices = () => {
  const services = [
    {
      title: "Custom Business Websites",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      items: [
        {
          name: "Professional Business Sites",
          description: "Custom-designed websites that reflect your brand identity and business goals. Built with modern technologies for optimal performance.",
        },
        {
          name: "Key Features",
          description: "Responsive design, SEO optimization, fast loading speeds, secure hosting, custom functionalities, and easy content management.",
        },
      ],
    },
    {
      title: "E-commerce Solutions",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
      items: [
        {
          name: "Online Store Development",
          description: "Feature-rich e-commerce websites with secure payment gateways, inventory management, and order processing systems.",
        },
        {
          name: "Advanced Features",
          description: "Product management, shopping cart, payment integration, order tracking, customer accounts, and analytics dashboard.",
        },
      ],
    },
    {
      title: "Portfolio Websites",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      items: [
        {
          name: "Creative Portfolios",
          description: "Showcase your work with stunning portfolio websites. Perfect for artists, photographers, designers, and creative professionals.",
        },
        {
          name: "Features",
          description: "Gallery layouts, project showcases, filterable portfolios, contact forms, and social media integration.",
        },
      ],
    },
    {
      title: "Corporate Websites",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      items: [
        {
          name: "Enterprise Solutions",
          description: "Professional corporate websites with comprehensive business solutions and enterprise-grade features.",
        },
        {
          name: "Core Features",
          description: "Multi-language support, intranet capabilities, document management, team collaboration tools, and analytics.",
        },
      ],
    }
  ];

  return (
    <>
      <Head>
        <title>Custom Website Development Services | Professional Web Design | Easy2BuyHub</title>
        <meta name="description" content="Transform your online presence with our custom website development services. Professional web design, e-commerce solutions, and business websites tailored to your needs. Get started today!" />
        <meta name="keywords" content="custom website development, web design services, professional website design, e-commerce website development, business website, portfolio website, corporate website design, responsive web design, website builder India, affordable web design" />
        
        <meta property="og:title" content="Custom Website Development & Design Services | Easy2BuyHub" />
        <meta property="og:description" content="Professional website development services tailored to your business needs. Expert web designers creating stunning, functional websites." />
        <meta property="og:image" content="https://www.easy2buyhub.com/images/custom-website.jpg" />
        <meta property="og:url" content="https://www.easy2buyhub.com/services/customize-website" />
        
        <link rel="canonical" href="https://www.easy2buyhub.com/services/customize-website" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Custom Website Development Services",
              "provider": {
                "@type": "Organization",
                "name": "Easy2BuyHub",
                "url": "https://www.easy2buyhub.com"
              },
              "description": "Professional website development and design services for businesses",
              "areaServed": "IN",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Website Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Business Websites",
                      "description": "Professional business website development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Development",
                      "description": "Custom e-commerce website solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="custom-website-services">
        <div className="container">
          <header className="section-title">
            <h1>Custom Website Development Services</h1>
            <p>
              Create a powerful online presence with our custom website development services. 
              We design and develop websites that are not just visually stunning but also 
              functional and result-driven.
            </p>
          </header>

          <section className="services-grid" aria-label="Website Development Services">
            {services.map((service, index) => (
              <article className="service-card" key={index}>
                <div className="image-wrapper">
                  <Image 
                    src={service.image}
                    alt={`${service.title} - Easy2BuyHub Web Development`}
                    width={400}
                    height={300}
                    loading={index <= 2 ? "eager" : "lazy"}
                    quality={85}
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

          <section className="faq-section" aria-label="Frequently Asked Questions">
            <h2>Common Questions About Custom Website Development</h2>
            <div className="faq-grid">
              <details>
                <summary>How long does it take to build a custom website?</summary>
                <p>The timeline varies depending on the complexity and requirements of your project. A basic business website typically takes 4-6 weeks, while more complex e-commerce sites may take 8-12 weeks.</p>
              </details>
              <details>
                <summary>Do you provide website maintenance services?</summary>
                <p>Yes, we offer comprehensive website maintenance packages including regular updates, security monitoring, backups, and technical support.</p>
              </details>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .custom-website-services {
          padding: 80px 20px;
          background: linear-gradient(to bottom, #f8f9ff, #ffffff);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          background: linear-gradient(45deg, #2563eb, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));
          gap: 30px;
          padding: 20px;
        }

        .service-card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.4s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.08);
        }

        .service-card-content {
          padding: clamp(20px, 4vw, 35px);
          flex-grow: 1;
        }

        .service-item {
          padding: 20px;
          margin-bottom: 20px;
          background: #f8fafc;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .purchase-button {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: linear-gradient(45deg, #3b82f6, #2563eb);
          color: white;
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .faq-section {
          margin-top: 80px;
          padding: 40px;
          background: #f8fafc;
          border-radius: 20px;
        }

        .faq-grid {
          display: grid;
          gap: 20px;
          margin-top: 30px;
        }

        details {
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        summary {
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .custom-website-services {
            padding: 60px 15px;
          }

          .service-card-content {
            padding: 20px;
          }

          .service-item {
            padding: 15px;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 480px) {
          .section-title p {
            font-size: 1rem;
            padding: 0 10px;
          }

          .service-card-content h2 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
};

export default CustomWebsiteServices; 