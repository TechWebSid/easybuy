import React from "react";
import Head from "next/head";
import Navbar from "../../../components/Layouts/Navbar";
import Link from "next/link";

const SEOServices = () => {
  const services = [
    {
      title: "On-Page SEO",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      items: [
        {
          name: "Content Optimization",
          description: "Optimization of website content and HTML source code for maximum search engine visibility.",
        },
        {
          name: "Key Features",
          description: "Keyword research and integration, meta titles and descriptions, header tags (H1, H2, etc.) optimization, image optimization, internal linking structure.",
        },
      ],
    },
    {
      title: "Off-Page SEO",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
      items: [
        {
          name: "Authority Building",
          description: "Building authority and credibility through external links and relationships.",
        },
        {
          name: "Key Features",
          description: "Backlink building, guest blogging, social bookmarking, influencer outreach strategies.",
        },
      ],
    },
    {
      title: "Technical SEO",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      items: [
        {
          name: "Technical Optimization",
          description: "Ensuring the website is technically optimized for search engines.",
        },
        {
          name: "Key Features",
          description: "Website speed optimization, mobile-friendliness, secure connections (HTTPS), structured data (schema markup), crawlability and indexability improvements.",
        },
      ],
    },
    {
      title: "Local SEO",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      items: [
        {
          name: "Local Search Optimization",
          description: "Optimize for local search queries and improve local visibility.",
        },
        {
          name: "Key Features",
          description: "Google My Business optimization, local keyword optimization, generating and managing local reviews, NAP (Name, Address, Phone) consistency.",
        },
      ],
    },
    {
      title: "E-Commerce SEO",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      items: [
        {
          name: "E-Commerce Optimization",
          description: "Specialized strategies for online stores and e-commerce platforms.",
        },
        {
          name: "Key Features",
          description: "Product page optimization, category page SEO, integration with shopping platforms (Google Shopping, Amazon), managing product reviews and Q&A sections.",
        },
      ],
    },
    {
      title: "Content Optimization",
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg",
      items: [
        {
          name: "Content Strategy",
          description: "Improve the quality and relevance of website content.",
        },
        {
          name: "Key Features",
          description: "Blog optimization and optimization, long-tail keyword targeting, voice search optimization.",
        },
      ],
    },
    {
      title: "SEO Audit and Reporting",
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
      items: [
        {
          name: "Comprehensive Analysis",
          description: "Comprehensive analysis of your website's current SEO status.",
        },
        {
          name: "Key Features",
          description: "Identifying technical issues, competitor analysis, monthly performance reports.",
        },
      ],
    },
    {
      title: "SEO for Startups and Small Businesses",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG7h_AyLfJEPIby9QafLej8JA-l1qZEjFzg&s",
      items: [
        {
          name: "Startup SEO Package",
          description: "Affordable and effective solutions tailored for beginners.",
        },
        {
          name: "Key Features",
          description: "Domain selection guidance, website launch SEO checklist, budget-friendly SEO strategies.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Professional SEO Services in India | Easy2BuyHub Digital Marketing</title>
        <meta name="description" content="Boost your website rankings with Easy2BuyHub's professional SEO services. Expert on-page, off-page, technical SEO, and local SEO solutions. Get a free SEO audit today!" />
        <meta name="keywords" content="SEO services, digital marketing, search engine optimization, local SEO, technical SEO, SEO company India, best SEO services, affordable SEO, ecommerce SEO, SEO optimization, SEO consultant, SEO expert, SEO packages, SEO strategy, website ranking" />
        
        <meta property="og:title" content="Professional SEO Services | Easy2BuyHub Digital Marketing" />
        <meta property="og:description" content="Transform your online presence with our comprehensive SEO services. Expert solutions for better rankings, more traffic, and higher conversions." />
        <meta property="og:image" content="https://www.easy2buyhub.com/images/seo-services.jpg" />
        <meta property="og:url" content="https://www.easy2buyhub.com/services/seo" />
        
        <link rel="canonical" href="https://www.easy2buyhub.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "SEO Services",
              "provider": {
                "@type": "Organization",
                "name": "Easy2BuyHub",
                "url": "https://www.easy2buyhub.com"
              },
              "description": "Comprehensive SEO services including technical optimization, content strategy, and local SEO",
              "areaServed": "IN",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "On-Page SEO",
                      "description": "Complete on-page optimization including content and technical aspects"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technical SEO",
                      "description": "Advanced technical optimization for better search engine visibility"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <Navbar />

      <style jsx>{`
        .seo-services {
          padding: 120px 20px 80px;
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
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(45deg, #2563eb, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .section-title p {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .service-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        .service-card-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-card-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .service-item {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          background: #f1f5f9;
          transform: translateX(5px);
        }

        .service-item h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.75rem;
        }

        .service-item p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .purchase-button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(
            45deg,
            #ff6b6b,
            #ff8e53,
            #ffd700,
            #ff6b6b
          );
          background-size: 300% 300%;
          color: white;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.5s ease;
          animation: gradient 5s ease infinite;
          text-align: center;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
          min-width: 160px;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .purchase-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
          background-position: right center;
        }

        .faq-section {
          margin-top: 4rem;
          padding: 2rem;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .faq-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
          margin-bottom: 2rem;
        }

        .faq-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        details {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        details:hover {
          background: #f1f5f9;
        }

        summary {
          font-size: 1.2rem;
          font-weight: 600;
          color: #3b82f6;
          cursor: pointer;
          padding-right: 2rem;
          position: relative;
        }

        summary::-webkit-details-marker {
          display: none;
        }

        summary::after {
          content: '→';
          position: absolute;
          right: 0;
          transform: rotate(90deg);
          transition: transform 0.3s ease;
        }

        details[open] summary::after {
          transform: rotate(-90deg);
        }

        details p {
          margin-top: 1rem;
          color: #64748b;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }

          .section-title h1 {
            font-size: 2rem;
          }

          .service-card-content {
            padding: 1.5rem;
          }

          .seo-services {
            padding: 140px 10px 40px;
          }

          .purchase-button {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            padding: 0.875rem 2rem;
          }

          .service-item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .faq-section {
            margin-top: 2rem;
            padding: 1rem;
          }

          .faq-section h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .seo-services {
            padding: 120px 10px 30px;
          }

          .section-title {
            margin-bottom: 40px;
          }

          .section-title h1 {
            font-size: 1.75rem;
          }

          .service-card img {
            height: 200px;
          }

          .service-card-content {
            padding: 1rem;
          }

          .purchase-button {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
          }

          .faq-section {
            padding: 1rem;
          }

          summary {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <main className="seo-services">
        <div className="container">
          <div className="section-title">
            <h1>SEO Services & Solutions</h1>
            <p>
              Boost your online visibility and drive organic traffic with our comprehensive 
              SEO services. From technical optimization to content strategy, we help you 
              achieve sustainable search engine rankings.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img 
                  src={service.image} 
                  alt={`${service.title} - Easy2BuyHub SEO Services`}
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="service-card-content">
                  <h2>{service.title}</h2>
                  {service.items.map((item, idx) => (
                    <div className="service-item" key={idx}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      {idx === 0 && (
                        <Link href="/quotation">
                          <span className="purchase-button">Get Started →</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <section className="faq-section" aria-label="Frequently Asked Questions">
            <h2>Frequently Asked Questions About SEO Services</h2>
            <div className="faq-grid">
              <details>
                <summary>What is SEO and why is it important?</summary>
                <p>SEO (Search Engine Optimization) is crucial for improving your website's visibility in search engine results. It helps drive organic traffic, increase brand awareness, and generate quality leads for your business.</p>
              </details>
              <details>
                <summary>How long does it take to see SEO results?</summary>
                <p>SEO is a long-term strategy. While initial improvements can be seen in 3-6 months, significant results typically take 6-12 months depending on competition, current website status, and target keywords.</p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SEOServices;
