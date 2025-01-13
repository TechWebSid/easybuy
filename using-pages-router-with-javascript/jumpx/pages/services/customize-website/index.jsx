import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Link from 'next/link';

const CustomizeWebsite = () => {
  const services = [
    {
      title: "Corporate and Professional Websites",
      image: "/images/corporate.jpg",
      items: [
        {
          name: "Business Websites",
          description: "Tailored websites for businesses to establish a strong online presence.",
        },
        {
          name: "Portfolio Websites",
          description: "Showcase your work and achievements with stunning portfolio designs.",
        },
      ],
    },
    {
      title: "E-Commerce and Retail",
      image: "/images/e-commerce.jpg",
      items: [
        {
          name: "E-Commerce Stores",
          description: "Set up online stores with secure payment gateways and user-friendly interfaces.",
        },
        {
          name: "Marketplace Websites",
          description: "Multi-vendor platforms for seamless buying and selling experiences.",
        },
      ],
    },
    {
      title: "Hospitality and Travel",
      image: "/images/hotels.jpg",
      items: [
        {
          name: "Hotel and Booking Websites",
          description: "Feature-rich booking systems for hotels and resorts.",
        },
        {
          name: "Travel Agency Websites",
          description: "Custom websites for travel agencies with itinerary management.",
        },
      ],
    },
    {
      title: "Food and Beverage",
      image: "/images/food.jpg",
      items: [
        {
          name: "Restaurant Websites",
          description: "Modern websites to showcase menus and accept online reservations.",
        },
        {
          name: "Food Blogs",
          description: "Creative and interactive platforms for sharing food recipes and reviews.",
        },
      ],
    },
    {
      title: "Media and Content Creators",
      image: "https://images-platform.99static.com//4yfgygtAeHVF4gGFAIQUxjuYyfI=/0x0:1600x1600/fit-in/500x500/99designs-contests-attachments/75/75560/attachment_75560322",
      items: [
        {
          name: "YouTubers/Influencers",
          description: "Personalized websites to promote your content and connect with followers.",
        },
        {
          name: "Blogs and Content Platforms",
          description: "Custom blogging platforms for sharing ideas and articles.",
        },
      ],
    },
    {
      title: "Education and Training",
      image: "/images/education.jpg",
      items: [
        {
          name: "Educational Platforms",
          description: "Interactive platforms for online learning and course management.",
        },
        {
          name: "School/College Websites",
          description: "Professional websites for educational institutions to showcase their offerings.",
        },
      ],
    },
    {
      title: "Healthcare and Wellness",
      image: "/images/health.jpg",
      items: [
        {
          name: "Doctor Appointment Websites",
          description: "Efficient platforms for booking doctor appointments online.",
        },
        {
          name: "Fitness/Wellness Blogs",
          description: "Websites to share fitness tips, routines, and health advice.",
        },
      ],
    },
    {
      title: "Community and Engagement",
      image: "/images/community.jpg",
      items: [
        {
          name: "Social Networking Websites",
          description: "Custom platforms for connecting people and fostering engagement.",
        },
        {
          name: "Forums and Communities",
          description: "Interactive forums for discussions and community building.",
        },
      ],
    },
    {
      title: "Entertainment and Media",
      image: "https://images.pexels.com/photos/6977377/pexels-photo-6977377.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: [
        {
          name: "Streaming Platforms",
          description: "Websites for hosting and streaming media content.",
        },
        {
          name: "Event Websites",
          description: "Custom event management platforms for hosting and promoting events.",
        },
      ],
    },
    {
      title: "Real Estate and Classifieds",
      image: "/images/realestate.jpg",
      items: [
        {
          name: "Real Estate Websites",
          description: "Modern platforms for showcasing properties and connecting buyers with sellers.",
        },
        {
          name: "Classified Websites",
          description: "Custom platforms for listing ads and classified content.",
        },
      ],
    },
    {
      title: "Technology and Innovation",
      image: "/images/tech.jpg",
      items: [
        {
          name: "SaaS Websites",
          description: "Professional websites for showcasing software-as-a-service products.",
        },
        {
          name: "Tech Blogs",
          description: "Interactive platforms for sharing the latest in technology and innovation.",
        },
      ],
    },
  ];

  return (
    <>
    <Navbar/>
      <style jsx>{`
        .customize-website {
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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
          .customize-website {
            padding: 120px 10px 40px;
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
          
          .service-item h4 {
            font-size: 1.1rem;
          }
          
          .service-item p {
            font-size: 0.95rem;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .customize-website {
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
            width: 100%;
            justify-content: center;
          }
        }
          @media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 30px;
  }

  .service-card img {
    height: 300px;
    object-fit: cover;
  }
}

      `}</style>

      <div className="customize-website">
        <div className="container">
          <div className="section-title">
            <h2>Transform Your Digital Presence</h2>
            <p>
              Choose from our expertly crafted website solutions designed to elevate your brand 
              and deliver exceptional user experiences across every industry.
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

export default CustomizeWebsite;
