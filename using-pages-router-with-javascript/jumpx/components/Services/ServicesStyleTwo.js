import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Customize Website",
    shortText:
      "Start to Create visually stunning and responsive websites that reflect your brand identity and enhance user experience starting with low budget.",
    viewDetails: "/services/customize-website/",
  },
  {
    iconName: "flaticon-vr",
    title: "E-commerce solutions",
    shortText:
      "Easy2BuyHub simplifies e-commerce by offering product listings, platform tie-ups, supplier networks, and comprehensive digital marketing.",
    viewDetails: "/services/e-commerce/",
  },
  {
    iconName: "flaticon-blockchain",
    title: "SEO optimization",
    shortText:
      "Boost your website's visibility and attract organic traffic through expert SEO strategies, improving rankings and engagement.",
    viewDetails: "/services/seo/",
  },
  {
    iconName: "flaticon-target",
    title: "Full Stack Development",
    shortText:
      "Deliver scalable and high-performance applications using modern technologies like React.js, Node.js, MongoDB, Next.js, Capacitor.js.",
    viewDetails: "/services/fullstack/",
  },
  {
    iconName: "flaticon-choice",
    title: "API Integration",
    shortText:
      "Enhance your applications by integrating third-party APIs seamlessly, improving functionality, enriching user experience, automating processes.",
    viewDetails: "/services/api/",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Digital Marketing",
    shortText:
      "Accelerating growth through customized strategies and powerful digital solutions designed to elevate your business and maximize results.",
    viewDetails: "/services/digital-marketing/",
  },
];

const ServicesStyleTwo = () => {
  const router = useRouter();

  return (
    <>
      <style jsx>{`
        .offer-area {
          padding: 50px 0;
          background-color: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-title h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .section-title p {
          font-size: 1rem;
          color: #666;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .service-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .service-card i {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 15px;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .service-card p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 20px;
        }

        .view-details-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .view-details-button:hover {
          background-color: #0056b3;
        }

        .chat-assistant-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          padding: 16px 28px;
          background: linear-gradient(45deg, #3b82f6, #2563eb);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 1000;
        }

        .chat-assistant-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
        }

        .chat-icon {
          font-size: 1.4rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @media (max-width: 768px) {
          .chat-assistant-button {
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="offer-area">
        <div className="container">
          <div className="section-title">
            <h2>Our Services at Easy2BuyHub</h2>
            <p>
              We offer a wide range of professional services to help you find
              the best deals online. Our experts are here to guide you through
              the buying process, making it simple and hassle-free.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <i className={service.iconName}></i>
                <h3>{service.title}</h3>
                <p>{service.shortText}</p>
                <Link href={service.viewDetails}>
                  <button className="view-details-button">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button 
        className="chat-assistant-button"
        onClick={() => router.push('/chatbot')}
      >
        <span className="chat-icon">💬</span>
        Need Help? Chat with AI Assistant
      </button>
    </>
  );
};

export default ServicesStyleTwo;
