import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

export default function FullStackInternship() {
  return (
    <>
      <Head>
        <title>Full Stack Development Internship - Easy2BuyHub</title>
        <meta name="description" content="Join our Full Stack Development Internship program and become a complete web developer" />
      </Head>

      <main>
        <Navbar />
        
        <div className="hero-section">
          <div className="container">
            <h1>Full Stack Development Internship</h1>
            <p>Master Both Frontend & Backend Development</p>
          </div>
        </div>

        <div className="program-details">
          <div className="container">
            <div className="content-grid">
              <div className="info-card">
                <h2>Program Overview</h2>
                <p>Embark on a comprehensive 6-month journey to become a full stack developer. Master both client-side and server-side technologies while building complete web applications from scratch.</p>
              </div>

              <div className="info-card">
                <h2>Frontend Skills</h2>
                <ul>
                  <li>React.js & Next.js</li>
                  <li>Modern UI/UX Design</li>
                  <li>Responsive Development</li>
                  <li>State Management</li>
                  <li>Progressive Web Apps</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Backend Skills</h2>
                <ul>
                  <li>Node.js & Express.js</li>
                  <li>MongoDB & Database Design</li>
                  <li>RESTful API Development</li>
                  <li>Authentication & Security</li>
                  <li>Cloud Deployment</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Additional Benefits</h2>
                <ul>
                  <li>Complete portfolio development</li>
                  <li>Real-world project experience</li>
                  <li>Industry mentor guidance</li>
                  <li>Job placement support</li>
                  <li>Networking opportunities</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Career Prospects</h2>
                <ul>
                  <li>Full Stack Developer</li>
                  <li>Software Engineer</li>
                  <li>Technical Lead</li>
                  <li>Freelance Developer</li>
                  <li>Technical Consultant</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Prerequisites</h2>
                <ul>
                  <li>Basic programming knowledge</li>
                  <li>HTML, CSS, JavaScript fundamentals</li>
                  <li>Strong problem-solving skills</li>
                  <li>Dedication to learn</li>
                  <li>Good communication skills</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <div className="price-tag">₹9,500</div>
              <p>Transform Your Career with Full Stack Development</p>
              <Link href="/payment?program=fullstack&amount=9500" className="cta-button">
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #9b59b6, #8e44ad);
          color: white;
          padding: 100px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%);
          background-size: 60px 60px;
          opacity: 0.1;
        }

        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out;
          position: relative;
        }

        .hero-section p {
          font-size: 1.5rem;
          opacity: 0.9;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .program-details {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .info-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          border-left: 4px solid #9b59b6;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .info-card h2 {
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 1.5rem;
          position: relative;
          padding-bottom: 10px;
        }

        .info-card h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: #9b59b6;
          border-radius: 2px;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
        }

        .info-card li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          color: #666;
        }

        .info-card li:last-child {
          border-bottom: none;
        }

        .cta-section {
          text-align: center;
          padding: 50px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, #9b59b6, #8e44ad);
        }

        .price-tag {
          font-size: 3.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #9b59b6, #8e44ad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-section p {
          color: #666;
          margin-bottom: 25px;
          font-size: 1.2rem;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #9b59b6, #8e44ad);
          color: white;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(155, 89, 182, 0.3);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.2rem;
          }

          .hero-section p {
            font-size: 1.2rem;
          }

          .content-grid {
            gap: 20px;
          }

          .info-card {
            padding: 20px;
          }

          .price-tag {
            font-size: 2.8rem;
          }

          .cta-button {
            padding: 12px 30px;
            font-size: 1.1rem;
          }

          .cta-section {
            padding: 30px;
          }

          .cta-section p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
} 