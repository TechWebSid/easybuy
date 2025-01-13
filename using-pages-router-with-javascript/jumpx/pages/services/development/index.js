import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Link from "next/link";

const Development = () => {
  const services = [
    {
      title: "Web Development",
      image: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg",
      items: [
        {
          name: "Frontend Development",
          description: "Modern, responsive websites using React.js, Next.js, and other cutting-edge technologies.",
        },
        {
          name: "Backend Development",
          description: "Robust server-side solutions with Node.js, Python, and scalable database architectures.",
        }
      ]
    },
    {
      title: "Mobile Development",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      items: [
        {
          name: "Native Apps",
          description: "High-performance iOS and Android applications using Swift and Kotlin.",
        },
        {
          name: "Cross-Platform",
          description: "Cost-effective solutions using React Native and Flutter for multiple platforms.",
        }
      ]
    },
    {
      title: "Enterprise Solutions",
      image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg",
      items: [
        {
          name: "Custom Software",
          description: "Tailored enterprise applications to streamline your business operations.",
        },
        {
          name: "System Integration",
          description: "Seamless integration of new solutions with existing systems and databases.",
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

        .development-services {
          padding: 120px 20px 80px;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
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
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 30px;
          padding: 20px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.4s ease;
          border: none;
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
          background: linear-gradient(45deg, #1e3a8a, #1e40af);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
        }

        .get-started-button:hover {
          background: linear-gradient(45deg, #1e40af, #1e3a8a);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
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

.purchase-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 10px rgba(255, 116, 142, 0.3);
}

/* Add shine effect */
.purchase-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
  border-radius: 50%;
}

.purchase-button:hover::before {
  opacity: 1;
  transform: rotate(45deg) translateX(-50%);
}


        @media (max-width: 768px) {
          .development-services {
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

          .service-card-content {
            padding: 20px 15px;
          }

          .service-item {
            padding: 15px;
            margin-bottom: 15px;
          }

          .purchase-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .development-services {
            padding: 30px 5px;
          }

          .services-grid {
            padding: 5px;
          }

          .service-card {
            border-radius: 15px;
          }

          .service-card img {
            height: 180px;
          }

          .service-card-content {
            padding: 15px 12px;
          }

          .service-item {
            padding: 12px;
            margin-bottom: 12px;
          }
        }
      `}</style>

      <div className="development-services">
        <div className="container">
          <div className="section-title">
            <h2>Development Services</h2>
            <p>
              Transform your ideas into reality with our expert development services. 
              We build scalable, modern applications using cutting-edge technologies.
            </p>
          </div>

          <div className="intro-box">
            <h3>Why Choose Our Development Services?</h3>
            <p>
              Our team of experienced developers combines technical expertise with 
              industry best practices to deliver high-quality, scalable solutions 
              that drive your business forward. From web applications to mobile apps, 
              we've got you covered.
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

export default Development; 