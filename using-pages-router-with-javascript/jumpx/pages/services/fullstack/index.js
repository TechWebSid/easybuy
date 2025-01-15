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

      <main className="fullstack-services">
        <div className="container">
          <header className="section-title">
            <h1>Full Stack Development Services</h1>
            <p>
              Transform your digital vision into reality with our comprehensive full-stack 
              development solutions. From frontend excellence to robust backend systems, 
              we deliver scalable and efficient applications.
            </p>
            <Link href="/quotation" className="get-started-link">
              Get Started with Frontend Development →
            </Link>
          </header>

          <section className="services-grid" aria-label="Full Stack Development Services">
            {services.map((service, index) => (
              <article className="service-card" key={index}>
                <div className="image-wrapper">
                  <Image 
                    src={service.image}
                    alt={`${service.title} - Easy2BuyHub Development Services`}
                    width={400}
                    height={300}
                    loading={index <= 2 ? "eager" : "lazy"}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURCNz5GPjIxTU9HRVBVWFFQT05jbnNmUVBZYV3/2wBDARUXFx4aHR4eHV1CJzwnQl1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                        <Link href="/quotation" className="purchase-button">
                          Get Started <span className="sr-only">with {service.title}</span> →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>

          {/* Technologies Section */}
          <section className="technologies-section">
            <h2>Technologies We Excel In</h2>
            <div className="tech-grid">
              {/* Add your technology icons/logos here */}
              <div className="tech-item">
            
              
              </div>
              {/* Add more technology items */}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section" aria-label="Frequently Asked Questions">
            <h2>Common Questions About Full Stack Development</h2>
            <div className="faq-grid">
              <details>
                <summary>What is Full Stack Development?</summary>
                <p>Full Stack Development involves both frontend (client-side) and backend (server-side) development. Our developers are proficient in all aspects of web application development, from user interfaces to database management.</p>
              </details>
              {/* Add more FAQs */}
            </div>
          </section>

        
        </div>
      </main>

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
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
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
          .fullstack-services {
            padding: 120px 10px 40px;
          }
          
          .section-title h2 {
            font-size: 2rem;
            padding: 0 10px;
          }
          
          .service-card-content {
            padding: 20px;
          }
          
          .service-item {
            padding: 15px;
            margin-bottom: 15px;
          }
          
          .service-item h4 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title h2 {
            font-size: 1.8rem;
          }
          
          .section-title p {
            font-size: 1rem;
            padding: 0 10px;
          }
          
          .service-card img {
            height: 200px;
          }
          
          .service-card-content h3 {
            font-size: 1.4rem;
          }
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 12px 12px 0 0;
        }

        .service-image {
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .technologies-section {
          margin-top: 80px;
          text-align: center;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .cta-section {
          margin-top: 80px;
          text-align: center;
          padding: 60px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 20px;
          color: white;
        }

        .cta-button {
          display: inline-block;
          padding: 15px 30px;
          background: white;
          color: #2563eb;
          border-radius: 30px;
          font-weight: 600;
          margin-top: 20px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        .get-started-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4070f4;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .get-started-link:hover {
          transform: translateX(5px);
          color: #2d5be3;
        }

        @media (max-width: 768px) {
          .get-started-link {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .get-started-link {
            font-size: 15px;
          }
        }

        /* Add responsive styles */
      `}</style>
    </>
  );
};

export default FullStackServices;
