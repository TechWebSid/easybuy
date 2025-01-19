import React from 'react';

const InternshipButton = ({ onClick }) => {
  return (
    <button className="internship-button" onClick={onClick}>
      Join Our Internship Program
      <div className="glow"></div>

      <style jsx>{`
        .internship-button {
          position: fixed;
          top: 100px;
          right: 20px;
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          z-index: 100;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .glow {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          animation: rotate 3s linear infinite;
          opacity: 0;
        }

        .internship-button:hover {
          transform: translateY(-2px);
        }

        .internship-button:hover .glow {
          opacity: 0.3;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .internship-button {
            top: auto;
            bottom: 20px;
            right: 20px;
            font-size: 0.8rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </button>
  );
};

export default InternshipButton; 