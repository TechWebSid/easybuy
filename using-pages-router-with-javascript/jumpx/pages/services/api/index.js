import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Link from "next/link";

const APIServices = () => {
  const services = [
    {
      title: "Third-Party API Integration",
      image: "https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg",
      items: [
        {
          name: "Payment & E-commerce APIs",
          description: "Seamless integration with PayPal, Stripe, Shopify, and other major payment and e-commerce platforms.",
        },
        {
          name: "Social & Communication",
          description: "Connect with social platforms and enable SMS/email solutions using Twilio, SendGrid, and social APIs.",
        }
      ]
    },
    {
      title: "Custom API Development",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      items: [
        {
          name: "Tailored Solutions",
          description: "Custom API design and development with robust versioning and compatibility management.",
        },
        {
          name: "Integration Services",
          description: "Seamless integration with existing systems and third-party services.",
        }
      ]
    },
    {
      title: "Cloud API Integration",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      items: [
        {
          name: "Cloud Services",
          description: "Expert integration with AWS, Azure, and Google Cloud platforms and their services.",
        },
        {
          name: "SaaS Integration",
          description: "Connect with popular SaaS platforms like Salesforce, HubSpot, and Microsoft 365.",
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

        .purchase-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: linear-gradient(135deg, #ff7eb3, #ff758c, #ff8e72, #ffc85e);
          color: black;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(255, 116, 142, 0.3);
          position: relative;
          overflow: hidden;
          gap: 8px;
          width: fit-content;
        }

        .purchase-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(255, 116, 142, 0.4);
          background: linear-gradient(135deg, #ffc85e, #ff8e72, #ff758c, #ff7eb3);
        }

        @media (max-width: 768px) {
          .api-services {
            padding: 40px 10px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 10px;
          }
          
          .service-card {
            max-width: 100%;
            margin: 0 auto;
          }

          .service-card img {
            height: 200px;
          }
          
          .section-title h2 {
            font-size: 2rem;
            padding: 0 15px;
          }
          
          .section-title p {
            font-size: 1.1rem;
            padding: 0 15px;
            margin-bottom: 30px;
          }
          
          .service-card-content {
            padding: 20px 15px;
          }
          
          .service-card-content h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
          }
          
          .service-item {
            padding: 15px;
            margin-bottom: 15px;
          }
          
          .service-item p {
            font-size: 0.95rem;
            margin-bottom: 10px;
          }

          .purchase-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .api-services {
            padding: 30px 5px;
          }

          .services-grid {
            padding: 5px;
          }

          .service-card {
            border-radius: 15px;
          }
          
          .section-title h2 {
            font-size: 1.6rem;
          }
          
          .service-card img {
            height: 180px;
          }
          
          .service-card-content {
            padding: 15px 12px;
          }

          .service-card-content h3 {
            font-size: 1.3rem;
          }

          .service-item {
            padding: 12px;
            margin-bottom: 12px;
          }

          .purchase-button {
            padding: 8px 16px;
            font-size: 14px;
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
        </div>
      </div>
    </>
  );
};

export default APIServices;
