import React from "react";

const ECommerceServices = () => {
  const services = [
    {
      title: "Single Product E-Commerce",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
      items: [
        {
          name: "Flagship Product Store",
          description: "Detailed product page, payment gateway, shipping integration for entrepreneurs with a signature product.",
        },
        {
          name: "Features",
          description: "Optimized product showcase, secure payment processing, integrated shipping calculators, inventory management.",
        },
      ],
    },
    {
      title: "Multiple Product E-Commerce",
      image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
      items: [
        {
          name: "Full-Scale Online Store",
          description: "Online stores with multiple categories and comprehensive inventory management.",
        },
        {
          name: "Features",
          description: "Advanced product search, filtering options, multiple payment methods, customer review system.",
        },
      ],
    },
    {
      title: "Marketplace Platforms",
      image: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg",
      items: [
        {
          name: "Multi-Vendor Platform",
          description: "Comprehensive marketplace where multiple sellers can list and sell their products.",
        },
        {
          name: "Features",
          description: "Vendor dashboards, commission systems, product approval workflows, seller analytics.",
        },
      ],
    },
    {
      title: "Subscription-Based Websites",
      image: "https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg",
      items: [
        {
          name: "Recurring Revenue Platform",
          description: "Subscription box services and SaaS product platforms with recurring billing.",
        },
        {
          name: "Features",
          description: "Subscription management, automated billing, member portals, delivery scheduling.",
        },
      ],
    },
    {
      title: "Shopkeepers Going Online",
      image: "https://images.pexels.com/photos/5632375/pexels-photo-5632375.jpeg",
      items: [
        {
          name: "Digital Storefronts",
          description: "Custom e-commerce solutions for small businesses and local shops transitioning online.",
        },
        {
          name: "Features",
          description: "Easy inventory management, local delivery options, simple checkout process.",
        },
      ],
    },
    {
      title: "Student E-Commerce Solutions",
      image: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg",
      items: [
        {
          name: "Academic E-Commerce",
          description: "Helping students launch e-commerce stores for art, books, or projects.",
        },
        {
          name: "Features",
          description: "User-friendly design, affordable hosting, built-in marketing tools, educational resources.",
        },
      ],
    },
    {
      title: "Global E-Commerce",
      image: "https://images.pexels.com/photos/5632368/pexels-photo-5632368.jpeg",
      items: [
        {
          name: "International Sales Platform",
          description: "Multi-currency, multi-language platforms for global business reach.",
        },
        {
          name: "Features",
          description: "Currency conversion, international shipping integration, localized content.",
        },
      ],
    },
    {
      title: "Service-Based E-Commerce",
      image: "https://images.pexels.com/photos/5632366/pexels-photo-5632366.jpeg",
      items: [
        {
          name: "Service Booking Platform",
          description: "Online booking systems for services like salons, cleaning, or repairs.",
        },
        {
          name: "Features",
          description: "Appointment scheduling, service customization, payment processing, booking management.",
        },
      ],
    },
    {
      title: "B2B E-Commerce",
      image: "https://images.pexels.com/photos/5632364/pexels-photo-5632364.jpeg",
      items: [
        {
          name: "Business-to-Business Platform",
          description: "Specialized platforms for businesses selling to other businesses.",
        },
        {
          name: "Features",
          description: "Bulk ordering, price negotiation tools, business account management.",
        },
      ],
    },
    {
      title: "Niche-Specific Stores",
      image: "https://images.pexels.com/photos/5632362/pexels-photo-5632362.jpeg",
      items: [
        {
          name: "Specialized E-Commerce",
          description: "Custom stores for specific niches like eco-friendly products or handmade goods.",
        },
        {
          name: "Features",
          description: "Niche-specific features, specialized product categorization, targeted marketing tools.",
        },
      ],
    },
  ];

  return (
    <>
      <style jsx>{`
        .e-commerce-services {
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
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 35px;
          padding: 20px;
        }

        .service-card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
        }

        .service-card img {
          width: 100%;
          height: 270px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        .service-card-content {
          padding: 35px;
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

        .get-started-button {
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

        .get-started-button:hover {
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title h2 {
            font-size: 2.5rem;
          }
          
          .service-card-content h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <div className="e-commerce-services">
        <div className="container">
          <div className="section-title">
            <h2>E-Commerce Solutions</h2>
            <p>
              Discover our comprehensive range of e-commerce solutions designed to help businesses 
              of all sizes establish and grow their online presence. From single product stores 
              to complex marketplaces, we have the perfect solution for your needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((category, index) => (
              <div className="service-card" key={index}>
                <img src={category.image} alt={category.title} loading="lazy" />
                <div className="service-card-content">
                  <h3>{category.title}</h3>
                  {category.items.map((item, idx) => (
                    <div className="service-item" key={idx}>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      {idx === 0 && (
                        <a href="/contact" className="get-started-button">
                          Get Started →
                        </a>
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

export default ECommerceServices;
