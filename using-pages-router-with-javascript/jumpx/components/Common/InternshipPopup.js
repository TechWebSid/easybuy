import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const InternshipPopup = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const internships = [
    {
      title: "Frontend Development",
      description: "Join our frontend team and master modern web development",
      skills: [
        "React.js & Next.js",
        "Modern UI/UX Design",
        "Responsive Development",
        "Duration: 3 months"
      ],
      color: "#3498db",
      link: "/internship-frontend",
      price: 6000
    },
    {
      title: "Backend Development",
      description: "Build robust and scalable server-side applications",
      skills: [
        "Node.js & Express",
        "Database Management",
        "API Development",
        "Duration: 3 months"
      ],
      color: "#2ecc71",
      link: "/internship-backend",
      price: 6000
    },
    {
      title: "Full Stack Development",
      description: "Become a complete developer with end-to-end expertise",
      skills: [
        "MERN Stack",
        "Full Project Lifecycle",
        "DevOps Basics",
        "Duration: 6 months"
      ],
      color: "#9b59b6",
      link: "/internship-fullstack",
      price: 9500
    }
  ];

  const handleSlideInteraction = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const nextSlide = useCallback(() => {
    handleSlideInteraction();
    setCurrentSlide((prev) => (prev + 1) % internships.length);
  }, [handleSlideInteraction]);

  const prevSlide = useCallback(() => {
    handleSlideInteraction();
    setCurrentSlide((prev) => (prev - 1 + internships.length) % internships.length);
  }, [handleSlideInteraction]);

  const goToSlide = useCallback((index) => {
    handleSlideInteraction();
    setCurrentSlide(index);
  }, [handleSlideInteraction]);

  useEffect(() => {
    let timer;
    if (isOpen && isAutoPlaying) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isOpen, isAutoPlaying, nextSlide]);

  if (!isOpen) return null;

  const handleApply = (link, e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
    router.push(link);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2 className="popup-title">Join Our Internship Program</h2>
        
        <div className="slider-container">
          <button className="nav-button prev" onClick={prevSlide}>‹</button>
          
          <div className="slides-wrapper">
            <div 
              className="slides" 
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {internships.map((internship, index) => (
                <div key={index} className="slide">
                  <div className="internship-content" style={{ borderColor: internship.color }}>
                    <h3 style={{ color: internship.color }}>{internship.title}</h3>
                    <p className="description">{internship.description}</p>
                    <ul>
                      {internship.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                    <div className="price-section">
                      <span className="price">₹{internship.price.toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={(e) => handleApply(internship.link, e)}
                      className="apply-button"
                      style={{ 
                        background: `linear-gradient(45deg, ${internship.color}, ${internship.color}cc)`
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-button next" onClick={nextSlide}>›</button>
        </div>

        <div className="slider-dots">
          {internships.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 999;
          padding: 100px 15px 20px;
          overflow-y: auto;
          backdrop-filter: blur(3px);
        }

        .popup-container {
          background: white;
          width: 85%;
          max-width: 600px;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          animation: slideIn 0.3s ease-out;
          margin: auto;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          border-radius: 50%;
          font-size: 20px;
          color: #666;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
          padding: 0;
          line-height: 1;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.2);
          color: #ff4444;
          transform: scale(1.1);
        }

        .popup-title {
          text-align: center;
          color: #2c3e50;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          padding: 0 25px;
        }

        .slider-container {
          position: relative;
          overflow: hidden;
          margin: 0 -0.5rem;
        }

        .slides-wrapper {
          overflow: hidden;
          margin: 0 0.5rem;
        }

        .slides {
          display: flex;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
        }

        .slide {
          flex: 0 0 100%;
          padding: 0 0.5rem;
        }

        .internship-content {
          background: #fff;
          padding: 1.2rem;
          border-radius: 10px;
          border: 2px solid;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .description {
          color: #666;
          margin: 0.6rem 0;
          font-size: 0.95rem;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          font-size: 20px;
          cursor: pointer;
          z-index: 2;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .nav-button:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .prev { left: 5px; }
        .next { right: 5px; }

        .slider-dots {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: #ddd;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }

        .dot.active {
          background: #3498db;
          transform: scale(1.2);
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0.8rem 0;
          flex-grow: 1;
        }

        li {
          padding: 0.5rem 0;
          color: #555;
          font-size: 0.9rem;
          border-bottom: 1px solid #eee;
        }

        li:last-child {
          border-bottom: none;
        }

        .price-section {
          text-align: center;
          margin: 0.8rem 0;
          padding: 0.4rem;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 8px;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          display: block;
        }

        .apply-button {
          width: 100%;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .apply-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        @keyframes slideIn {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .popup-overlay {
            padding: 80px 10px 10px;
          }

          .popup-container {
            width: 92%;
            padding: 1.2rem;
          }

          .popup-title {
            font-size: 1.3rem;
          }

          .internship-content {
            padding: 1rem;
          }

          .description {
            font-size: 0.9rem;
          }

          .price {
            font-size: 1.3rem;
          }

          .apply-button {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .popup-overlay {
            padding: 70px 8px 8px;
          }

          .popup-container {
            width: 96%;
            padding: 1rem;
          }

          .close-button {
            top: 8px;
            right: 8px;
            width: 28px;
            height: 28px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default InternshipPopup; 