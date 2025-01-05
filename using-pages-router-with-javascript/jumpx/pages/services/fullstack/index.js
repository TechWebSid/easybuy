import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Link from "next/link";

const FullStackServices = () => {
  const services = [
    {
      title: "Frontend Development",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      items: [
        {
          name: "Responsive Web Design",
          description: "Pixel-perfect and mobile-friendly interfaces for desktops, tablets, and smartphones using HTML5, CSS3, Bootstrap, Tailwind CSS, Material-UI.",
        },
        {
          name: "Dynamic Frontend Solutions",
          description: "Interactive elements built with React.js, Angular.js, Vue.js, and Svelte for engaging user experiences.",
        },
        {
          name: "Single Page Applications",
          description: "Fast, dynamic websites that load without refreshing, similar to Gmail-like applications.",
        },
      ],
    },
    {
      title: "Backend Development",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      items: [
        {
          name: "API Development & Integration",
          description: "Robust RESTful and GraphQL APIs built with Node.js, Express.js, Django, Flask, Ruby on Rails, and PHP (Laravel).",
        },
        {
          name: "Database Management",
          description: "Optimized database systems using MySQL, PostgreSQL, MongoDB, Firebase, and SQLite for secure data handling.",
        },
        {
          name: "Cloud Solutions",
          description: "Scalable cloud server development on AWS, Google Cloud, Microsoft Azure, and DigitalOcean.",
        },
      ],
    },
    {
      title: "Full Stack Frameworks",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
      items: [
        {
          name: "Popular Stacks",
          description: "Expert development in MEAN Stack (MongoDB, Express.js, Angular, Node.js) and MERN Stack (MongoDB, Express.js, React.js, Node.js).",
        },
        {
          name: "Traditional Stacks",
          description: "LAMP Stack (Linux, Apache, MySQL, PHP) and Django Stack (Django, PostgreSQL, React.js/Vue.js) implementation.",
        },
        {
          name: "Modern Stacks",
          description: "Ruby on Rails Stack with PostgreSQL/MySQL and modern JavaScript frameworks.",
        },
      ],
    },
    {
      title: "Custom Application Development",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      items: [
        {
          name: "Enterprise Solutions",
          description: "Large-scale business applications, E-commerce platforms with payment gateways, and custom CMS solutions.",
        },
        {
          name: "Real-Time Applications",
          description: "Chat applications, gaming platforms, live video streaming, and IoT platform integrations.",
        },
      ],
    },
    {
      title: "Maintenance and Support",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      items: [
        {
          name: "Ongoing Support",
          description: "Code audit & optimization, bug fixing, server management, and security updates.",
        },
        {
          name: "Feature Enhancement",
          description: "Regular updates and new feature integrations based on business requirements.",
        },
      ],
    },
    {
      title: "Development Technologies",
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
      items: [
        {
          name: "Frontend & Backend Tools",
          description: "Expertise in HTML, CSS, JavaScript, React.js, Angular, Vue.js, Python, PHP, Ruby, Java, .NET, and more.",
        },
        {
          name: "Database & DevOps",
          description: "Comprehensive database solutions (SQL & NoSQL) and DevOps tools including CI/CD pipelines and containers.",
        },
      ],
    },
    {
      title: "Development Process",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
      items: [
        {
          name: "End-to-End Development",
          description: "Complete process from requirement analysis to deployment, including UI/UX design, development, testing, and launch.",
        },
        {
          name: "Post-Launch Support",
          description: "Continuous monitoring, updates, troubleshooting, and maintenance support.",
        },
      ],
    },
    {
      title: "Marketing & Analytics",
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
      items: [
        {
          name: "Digital Marketing",
          description: "SEO optimization, content management, performance analytics, and digital marketing campaigns.",
        },
        {
          name: "Global Solutions",
          description: "Multi-language and multi-currency support for international reach.",
        },
      ],
    },
  ];

  return (
    <>
    <Navbar/>
      <style jsx>{`
        .fullstack-services {
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

        .contact-button {
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

        .contact-button:hover {
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
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

      <div className="fullstack-services">
        <div className="container">
          <div className="section-title">
            <h2>Full Stack Development Services</h2>
            <p>
              Comprehensive full-stack development solutions to bring your digital vision to life. 
              From frontend excellence to robust backend systems, we deliver end-to-end development 
              services that scale with your business.
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
                        <Link href="/pricing">
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

export default FullStackServices;
