import React from "react";
import Navbar from "../../../components/Layouts/Navbar";

const APIServices = () => {
  const services = [
    {
      title: "Third-Party API Integration",
      image: "https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg",
      items: [
        {
          name: "Payment Gateway APIs",
          description: "Seamless integration with PayPal, Stripe, Razorpay, Square, Paytm, and Google Pay for secure online transactions.",
        },
        {
          name: "E-Commerce & Social APIs",
          description: "Connect with Shopify, WooCommerce, Magento, and social platforms like Facebook, Instagram, Twitter, LinkedIn for complete business automation.",
        },
        {
          name: "Communication & Logistics",
          description: "Enable SMS, email, and shipping solutions using Twilio, SendGrid, WhatsApp Business API, FedEx, DHL, and UPS.",
        }
      ]
    },
    {
      title: "Custom API Development",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      items: [
        {
          name: "Tailored Solutions",
          description: "Custom API design and development to meet specific business requirements with middleware solutions for legacy systems.",
        },
        {
          name: "API Architecture",
          description: "Robust API versioning and backward compatibility management for seamless updates and maintenance.",
        }
      ]
    },
    {
      title: "Cloud API Integration",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      items: [
        {
          name: "SaaS Integration",
          description: "Connect with Salesforce, HubSpot, Zoho, Google Workspace, and Microsoft 365 for enhanced productivity.",
        },
        {
          name: "Cloud Services",
          description: "Seamless integration with AWS, Azure, Google Cloud platforms and their services like S3, EC2, and Cloud Functions.",
        }
      ]
    },
    {
      title: "Data Integration APIs",
      image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg",
      items: [
        {
          name: "CRM & ERP Integration",
          description: "Connect with Zoho, Salesforce, SAP, Oracle, and Microsoft Dynamics for efficient data synchronization.",
        },
        {
          name: "Database Solutions",
          description: "Robust API connections to MySQL, MongoDB, PostgreSQL, and Firebase for seamless data operations.",
        }
      ]
    },
    {
      title: "IoT & Automation APIs",
      image: "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg",
      items: [
        {
          name: "IoT Device Integration",
          description: "Connect, monitor, and control IoT devices remotely with custom API solutions for smart homes and wearable tech.",
        },
        {
          name: "Workflow Automation",
          description: "Implement Zapier and Make (Integromat) for automated workflows and scheduled tasks.",
        }
      ]
    },
    {
      title: "Development Tools & Frameworks",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      items: [
        {
          name: "API Protocols",
          description: "Expert implementation of RESTful APIs, SOAP APIs, and GraphQL for flexible and efficient data exchange.",
        },
        {
          name: "Development Stack",
          description: "Utilizing Node.js, Python, PHP, Ruby, and Java with frameworks like Django REST, Laravel, and Spring Boot.",
        }
      ]
    },
    {
      title: "Testing & Documentation",
      image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg",
      items: [
        {
          name: "Comprehensive Testing",
          description: "Automated and manual testing using Postman, Selenium, and JMeter with detailed debugging support.",
        },
        {
          name: "API Documentation",
          description: "Clear, developer-friendly documentation using Swagger/OpenAPI and Redoc for easy implementation.",
        }
      ]
    },
    {
      title: "Industry Solutions",
      image: "https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg",
      items: [
        {
          name: "Sector-Specific APIs",
          description: "Specialized solutions for E-commerce, Healthcare, Education, Finance, and Travel industries.",
        },
        {
          name: "Marketing Integration",
          description: "API solutions for marketplace listing, ad campaign management, and global business operations.",
        }
      ]
    }
  ];

  return (
    <>
    <Navbar/>
      <style jsx>{`
        .api-services {
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

        .intro-box {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin-bottom: 60px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
        }

        .intro-box h3 {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .intro-box p {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
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

        .integrate-button {
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

        .integrate-button:hover {
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

      <div className="api-services">
        <div className="container">
          <div className="section-title">
            <h2>API Integration Services</h2>
            <p>
              Unlock the full potential of your applications with our comprehensive API 
              integration solutions. Connect, automate, and scale your business with 
              seamless API implementations.
            </p>
          </div>

          <div className="intro-box">
            <h3>What is API Integration?</h3>
            <p>
              API (Application Programming Interface) integration enables seamless communication 
              between software applications. It allows different systems to share data and 
              functionality, improving efficiency, scalability, and user experience. Our expert 
              team ensures smooth integration while maintaining security and performance.
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
                        <a href="/purchase" className="integrate-button">
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

export default APIServices;
