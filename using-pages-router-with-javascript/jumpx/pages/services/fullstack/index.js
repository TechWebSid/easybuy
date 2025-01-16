import React from "react";
import Head from "next/head";
import Image from "next/image";
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
      <Head>
        <title>Full Stack Development Services | MERN & MEAN Stack | Easy2BuyHub</title>
        <meta name="description" content="Transform your ideas into reality with our expert Full Stack Development services. Specializing in MERN, MEAN stack, custom web applications, and enterprise solutions. Get a free consultation today!" />
        <meta name="keywords" content="full stack development, MERN stack, MEAN stack, web development, Node.js, React.js, Angular, MongoDB, Express.js, custom web applications, enterprise solutions, API development, frontend development, backend development, database management, cloud solutions" />
        
        <meta property="og:title" content="Full Stack Development Services | Easy2BuyHub Technology Solutions" />
        <meta property="og:description" content="End-to-end web development solutions using cutting-edge technologies. Expert team in MERN/MEAN stack, custom applications, and enterprise solutions." />
        <meta property="og:image" content="https://www.easy2buyhub.com/images/fullstack-development.jpg" />
        <meta property="og:url" content="https://www.easy2buyhub.com/services/fullstack" />
        


        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Full Stack Development Services",
              "provider": {
                "@type": "Organization",
                "name": "Easy2BuyHub",
                "url": "https://www.easy2buyhub.com"
              },
              "description": "Comprehensive full stack development services including MERN/MEAN stack development",
              "areaServed": "IN",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Full Stack Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "MERN Stack Development",
                      "description": "MongoDB, Express.js, React.js, Node.js development services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise Solutions",
                      "description": "Custom enterprise-grade applications and solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <Navbar />

      <style jsx>{`
        .fullstack-services {
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

        .section-title h1 {
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

        .get-started-link {
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
          margin-top: 2rem;
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

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .service-card-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-card-content h2 {
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

        .service-item h3 {
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

        .purchase-button:hover,
        .get-started-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
          background-position: right center;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }

          .section-title h1 {
            font-size: 2rem;
          }

          .service-card-content {
            padding: 1.5rem;
          }

          .fullstack-services {
            padding: 140px 10px 40px;
          }

          .purchase-button,
          .get-started-link {
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
          .fullstack-services {
            padding: 120px 10px 30px;
          }

          .section-title {
            margin-bottom: 40px;
          }

          .section-title h1 {
            font-size: 1.75rem;
          }

          .image-wrapper {
            height: 200px;
          }

          .service-card-content {
            padding: 1rem;
          }

          .purchase-button,
          .get-started-link {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>

      <main className="fullstack-services">
        <div className="container">
          <div className="section-title">
            <h1>Full Stack Development Services</h1>
            <p>
              Transform your digital vision into reality with our comprehensive full-stack 
              development solutions. From frontend excellence to robust backend systems, 
              we deliver scalable and efficient applications.
            </p>
            <Link href="/quotation" className="get-started-link">
              Get Started with Full Stack Development →
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="image-wrapper">
                  <Image 
                    src={service.image}
                    alt={`${service.title} - Full Stack Development Services`}
                    width={400}
                    height={300}
                    loading={index <= 2 ? "eager" : "lazy"}
                    quality={85}
                    className="service-image"
                  />
                </div>
                <div className="service-card-content">
                  <h2>{service.title}</h2>
                  {service.items.map((item, idx) => (
                    <div className="service-item" key={idx}>
                      <h3>{item.name}</h3>
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
      </main>
    </>
  );
};

export default FullStackServices;
