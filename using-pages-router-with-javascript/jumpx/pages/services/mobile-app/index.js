import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Link from 'next/link';

const MobileApp = () => {
  const services = [
    {
      title: "iOS App Development",
      image: "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
      items: [
        {
          name: "Native iOS Development",
          description: "Custom iPhone and iPad apps built with Swift and SwiftUI.",
        },
        {
          name: "iOS App Optimization",
          description: "Performance tuning and App Store optimization for maximum visibility.",
        },
      ],
    },
    {
      title: "Android App Development",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      items: [
        {
          name: "Native Android Development",
          description: "Robust Android apps built with Kotlin and Java.",
        },
        {
          name: "Play Store Optimization",
          description: "Strategic optimization for Google Play Store visibility.",
        },
      ],
    },
    {
      title: "Cross-Platform Development",
      image: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg",
      items: [
        {
          name: "React Native Development",
          description: "Cost-effective apps that work on both iOS and Android platforms.",
        },
        {
          name: "Flutter Development",
          description: "Beautiful, natively compiled apps for mobile, web, and desktop.",
        },
      ],
    },
    {
      title: "UI/UX Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      items: [
        {
          name: "Mobile App Design",
          description: "Intuitive and engaging user interfaces for mobile applications.",
        },
        {
          name: "User Experience Research",
          description: "Data-driven design decisions based on user behavior analysis.",
        },
      ],
    },
    {
      title: "App Testing & QA",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      items: [
        {
          name: "Automated Testing",
          description: "Comprehensive testing to ensure app reliability and performance.",
        },
        {
          name: "Quality Assurance",
          description: "Rigorous QA processes to deliver bug-free applications.",
        },
      ],
    },
    {
      title: "App Maintenance",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      items: [
        {
          name: "Regular Updates",
          description: "Continuous updates and maintenance to keep your app running smoothly.",
        },
        {
          name: "Performance Monitoring",
          description: "Real-time monitoring and optimization of app performance.",
        },
      ],
    },
    {
      title: "Backend Development",
      image: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
      items: [
        {
          name: "API Development",
          description: "Robust backend services and API integration for your mobile app.",
        },
        {
          name: "Database Design",
          description: "Scalable database architecture for efficient data management.",
        },
      ],
    },
    {
      title: "App Security",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      items: [
        {
          name: "Security Implementation",
          description: "Advanced security measures to protect user data and privacy.",
        },
        {
          name: "Compliance Management",
          description: "Ensuring your app meets all regulatory requirements.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <style jsx>{`
        .digital-marketing {
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

        .service-card-content h3 {
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

        .service-item h4 {
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

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }

          .section-title h2 {
            font-size: 2rem;
          }

          .service-card-content {
            padding: 1.5rem;
          }

          .digital-marketing {
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
        }

        @media (max-width: 480px) {
          .digital-marketing {
            padding: 120px 10px 30px;
          }

          .section-title {
            margin-bottom: 40px;
          }

          .section-title h2 {
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
        }
      `}</style>

      <div className="digital-marketing">
        <div className="container">
          <div className="section-title">
            <h2>Mobile App Development Solutions</h2>
            <p>
              Transform your ideas into powerful mobile applications. 
              We deliver cutting-edge mobile solutions that engage users and drive business growth.
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
                      <Link href="/quotation">
                        <span className="purchase-button">Get Started →</span>
                      </Link>
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

export default MobileApp;
