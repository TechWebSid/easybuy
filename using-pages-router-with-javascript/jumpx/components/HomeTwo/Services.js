import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Customize Website",
    shortText:
      "Start to Create visually stunning and responsive websites that reflect your brand identity and enhance user experience starting with low budget.",
    viewDetails: "/services/customize-websites/",
  },
  {
    iconName: "flaticon-vr",
    title: "E-commerce solutions",
    shortText:
      "Easy2BuyHub simplifies e-commerce by offering product listings, platform tie-ups, supplier networks, and comprehensive digital marketing.",
    viewDetails: "/services/e-commerse-solutions/",
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
    </>
  );
};

export default ServicesStyleTwo;
