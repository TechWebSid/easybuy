import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Link from 'next/link';

const DigitalMarketing = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      image: "https://images.pexels.com/photos/38544/pexels-photo-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Technical SEO",
          description: "Optimize your website's technical aspects for better search engine visibility.",
        },
        {
          name: "Content SEO",
          description: "Create and optimize content that ranks higher in search results.",
        },
      ],
    },
    {
      title: "Social Media Marketing",
      image: "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Social Media Management",
          description: "Professional management of your social media presence across platforms.",
        },
        {
          name: "Social Media Advertising",
          description: "Targeted advertising campaigns on major social media platforms.",
        },
      ],
    },
    {
      title: "Content Marketing",
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Blog Content Creation",
          description: "Engaging blog posts that attract and retain your target audience.",
        },
        {
          name: "Content Strategy",
          description: "Strategic content planning to achieve your marketing goals.",
        },
      ],
    },
    {
      title: "Pay-Per-Click Advertising",
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Google Ads Management",
          description: "Professional management of your Google Ads campaigns.",
        },
        {
          name: "Display Advertising",
          description: "Visual ads targeting your ideal customers across the web.",
        },
      ],
    },
    {
      title: "Email Marketing",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Email Campaign Management",
          description: "Strategic email campaigns to engage and convert subscribers.",
        },
        {
          name: "Newsletter Creation",
          description: "Professional newsletters that keep your audience informed.",
        },
      ],
    },
    {
      title: "Analytics and Reporting",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Performance Tracking",
          description: "Comprehensive tracking and analysis of marketing metrics.",
        },
        {
          name: "ROI Reporting",
          description: "Detailed reports showing the return on your marketing investment.",
        },
      ],
    },
    {
      title: "Video Marketing",
      image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Video Content Creation",
          description: "Professional video content for social media and websites.",
        },
        {
          name: "YouTube Marketing",
          description: "Strategic YouTube channel management and optimization.",
        },
      ],
    },
    {
      title: "Influencer Marketing",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: [
        {
          name: "Influencer Partnerships",
          description: "Connect with relevant influencers to promote your brand.",
        },
        {
          name: "Campaign Management",
          description: "End-to-end management of influencer marketing campaigns.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <style jsx>{`
        .digital-marketing {
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
          max-width: 700px;
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
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
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
          padding: 30px;
        }

        .service-card-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 25px;
          line-height: 1.3;
        }

        .service-item {
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 12px;
          background: #f8fafc;
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
          margin-bottom: 10px;
        }

        .service-item p {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 15px;
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
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title h2 {
            font-size: 2.5rem;
          }
          
          .service-card-content h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="digital-marketing">
        <div className="container">
          <div className="section-title">
            <h2>Digital Marketing Solutions</h2>
            <p>
              Boost your online presence with our comprehensive digital marketing services. 
              We help businesses grow their digital footprint and reach their target audience effectively.
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

export default DigitalMarketing;
