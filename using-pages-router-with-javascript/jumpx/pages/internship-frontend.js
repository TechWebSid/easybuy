import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

export default function FrontendInternship() {
  return (
    <>
      <Head>
        <title>Frontend Development Internship - Easy2BuyHub</title>
        <meta name="description" content="Join our Frontend Development Internship program and master modern web development technologies" />
      </Head>

      <main>
        <Navbar />
        
        <div className="hero-section">
          <div className="container">
            <h1>Frontend Development Internship</h1>
            <p>Master the Art of Modern Web Development</p>
          </div>
        </div>

        <div className="program-details">
          <div className="container">
            <div className="content-grid">
              <div className="info-card">
                <h2>Program Overview</h2>
                <p>Join our intensive 3-month frontend development internship and transform yourself into a professional web developer. Learn from industry experts and work on real-world projects.</p>
              </div>

              <div className="info-card">
                <h2>What You'll Learn</h2>
                <ul>
                  <li>React.js & Next.js Development</li>
                  <li>Modern UI/UX Design Principles</li>
                  <li>Responsive Web Development</li>
                  <li>State Management & API Integration</li>
                  <li>Performance Optimization</li>
                  <li>Version Control with Git</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Benefits</h2>
                <ul>
                  <li>Industry-recognized certification</li>
                  <li>Real project experience</li>
                  <li>Expert mentorship</li>
                  <li>Career guidance</li>
                  <li>Networking opportunities</li>
                </ul>
              </div>

              <div className="info-card">
                <h2>Eligibility</h2>
                <ul>
                  <li>Basic knowledge of HTML, CSS, JavaScript</li>
                  <li>Strong problem-solving skills</li>
                  <li>Dedication to learn and grow</li>
                  <li>Good communication skills</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <div className="price-tag">₹6,000</div>
              <p>Investment in Your Future</p>
              <Link href="/payment?program=frontend&amount=6000" className="cta-button">
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #3498db, #2980b9);
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
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
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