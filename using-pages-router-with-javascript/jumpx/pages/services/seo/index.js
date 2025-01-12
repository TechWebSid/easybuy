import React from "react";
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
    <Navbar/>
      <style jsx>{`
        .seo-services {
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

        .section-title h2 {
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
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 30px;
          padding: 20px;
        }

        .service-card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
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
          padding: 35px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-card-content h3 {
          font-size: 1.85rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 28px;
          line-height: 1.3;
        }

        .service-item {
          padding: 25px;
          margin-bottom: 22px;
          border-radius: 16px;
          background: #f8fafc;
          transition: all 0.3s ease;
          flex-grow: 1;
        }

        .service-item:hover {
          background: #f1f5f9;
          transform: translateX(8px);
        }

        .service-item h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 12px;
        }

        .service-item p {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .analyze-button {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          background: linear-gradient(45deg, #3b82f6, #2563eb);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
        }

        .analyze-button:hover {
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
        }

        .purchase-button {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: linear-gradient(45deg, #3b82f6, #2563eb);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
          cursor: pointer;
        }

        .purchase-button:hover {
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
        }

        @media (max-width: 768px) {
          .seo-services {
            padding: 40px 10px;
          }
          
          .section-title h2 {
            font-size: 2rem;
            padding: 0 10px;
          }
          
          .service-card-content {
            padding: 20px;
          }
          
          .service-item {
            padding: 15px;
            margin-bottom: 15px;
          }
          
          .purchase-button {
            padding: 10px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .section-title h2 {
            font-size: 1.8rem;
          }
          
          .section-title p {
            font-size: 1rem;
            padding: 0 10px;
          }
          
          .service-card img {
            height: 180px;
          }
          
          .service-card-content h3 {
            font-size: 1.4rem;
          }
        }
      `}</style>

      <div className="seo-services">
        <div className="container">
          <div className="section-title">
            <h2>SEO Services & Solutions</h2>
            <p>
              Boost your online visibility and drive organic traffic with our comprehensive 
              SEO services. From technical optimization to content strategy, we help you 
              achieve sustainable search engine rankings.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  {service.items.map((item, idx) => (
                    <div className="service-item" key={idx}>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      {idx === 0 && (
                        <Link href="/pricing">
                          <span className="purchase-button">Get Started →</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOServices;
