import React from "react";
import Navbar from "../../../components/Layouts/Navbar";

const UIUX = () => {
  const services = [
    {
      title: "User Interface Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      items: [
        {
          name: "Visual Design",
          description: "Creating stunning, modern interfaces with attention to typography, color theory, and visual hierarchy.",
        },
        {
          name: "Responsive Design",
          description: "Ensuring seamless experiences across all devices and screen sizes.",
        }
      ]
    },
    {
      title: "User Experience Design",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      items: [
        {
          name: "User Research",
          description: "In-depth analysis of user behavior, needs, and pain points to inform design decisions.",
        },
        {
          name: "Information Architecture",
          description: "Organizing content and flow to create intuitive navigation and user journeys.",
        }
      ]
    },
    {
      title: "Design Systems",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
      items: [
        {
          name: "Component Libraries",
          description: "Building scalable design systems with reusable components and style guides.",
        },
        {
          name: "Brand Guidelines",
          description: "Developing comprehensive brand identity and design documentation.",
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <style jsx>{`
        #navbar {
          background-color: rgba(255, 255, 255, 0.9); /* Set a semi-transparent white background */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        }

        .uiux-services {
          padding: 120px 20px 80px;
          background: linear-gradient(135deg, #312e81 0%, #3730a3 100%);
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
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .section-title p {
          color: #cbd5e1;
          font-size: 1.25rem;
          line-height: 1.8;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .intro-box {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 45px;
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .intro-box h3 {
          color: #ffffff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .intro-box p {
          color: #cbd5e1;
          font-size: 1.15rem;
          line-height: 1.8;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 35px;
          padding: 20px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.4s ease;
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
          background: #f8faff;
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

        .get-started-button {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          background: linear-gradient(45deg, #312e81, #3730a3);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
        }

        .get-started-button:hover {
          background: linear-gradient(45deg, #3730a3, #312e81);
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

      <div className="uiux-services">
        <div className="container">
          <div className="section-title">
            <h2>UI/UX Design Services</h2>
            <p>
              Elevate your brand with our expert UI/UX design services. We create intuitive, 
              engaging designs that enhance user experience and drive conversions.
            </p>
          </div>

          <div className="intro-box">
            <h3>Why Choose Our UI/UX Design Services?</h3>
            <p>
              Our design team focuses on creating user-centric designs that are not only 
              visually appealing but also functional and easy to use. We ensure that your 
              users have a seamless experience across all platforms.
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
                        <a href="/purchase" className="get-started-button">
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

export default UIUX; 