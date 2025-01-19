import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

export default function BackendInternship() {
  return (
    <>
      <Head>
        <title>Backend Development Internship - Easy2BuyHub</title>
        <meta name="description" content="Join our Backend Development Internship program and master server-side technologies" />
      </Head>

      <main>
        <Navbar />
        
        <div className="hero-section">
          <div className="container">
            <h1>Backend Development Internship</h1>
            <p>Build Powerful Server-Side Applications</p>
          </div>
        </div>

        <div className="program-details">
          <div className="container">
            <div className="content-grid">
              <div className="info-card">
                <h2>Program Overview</h2>
                <p>Dive into our comprehensive 3-month backend development internship. Learn to build scalable server-side applications and master database management under expert guidance.</p>
              </div>

              <div className="info-card">
                <h2>What You'll Learn</h2>
                <ul>
                  <li>Node.js & Express.js</li>
                  <li>Database Design & Management</li>
                  <li>RESTful API Development</li>
                  <li>Authentication & Security</li>
                  <li>Server Deployment & DevOps</li>
                  <li>Microservices Architecture</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Benefits</h2>
                <ul>
                  <li>Professional certification</li>
                  <li>Hands-on project experience</li>
                  <li>One-on-one mentorship</li>
                  <li>Job placement assistance</li>
                  <li>Industry connections</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Eligibility</h2>
                <ul>
                  <li>Basic programming knowledge</li>
                  <li>Understanding of JavaScript</li>
                  <li>Analytical thinking skills</li>
                  <li>Passion for server-side tech</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <div className="price-tag">₹6,000</div>
              <p>Launch Your Backend Career</p>
              <Link href="/payment?program=backend&amount=6000" className="cta-button">
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #2ecc71, #27ae60);
          color: white;
          padding: 100px 0 80px;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-section p {
          font-size: 1.5rem;
          opacity: 0.9;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .info-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          border-top: 4px solid #2ecc71;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .info-card h2 {
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 1.5rem;
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
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .price-tag {
          font-size: 3rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .cta-section p {
          color: #666;
          margin-bottom: 20px;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #2ecc71, #27ae60);
          color: white;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3);
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
            font-size: 2.5rem;
          }

          .cta-button {
            padding: 12px 30px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
} 