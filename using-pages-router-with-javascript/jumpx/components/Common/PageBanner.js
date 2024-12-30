import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PageBanner = ({ pageTitle, homePageText, activePageText }) => {
  return (
    <BannerContainer>
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
          <ul>
            <li>
              <Link href="/">{homePageText}</Link>
            </li>
            <li>{activePageText}</li>
          </ul>
        </div>
      </div>
    </BannerContainer>
  );
};

export default PageBanner;

// Styled Components with Professional Design, Color, and Animation
const BannerContainer = styled.div`
  background: linear-gradient(135deg, #030836, #0b1c57), 
    url('https://images.unsplash.com/photo-1506748686215-64fbd544b7f5') center/cover no-repeat; /* Updated gradient to match website background */
  padding: 120px 0;
  color: #fff;
  text-align: center;
  position: relative;
  font-family: 'Poppins', sans-serif;
  animation: fadeIn 1.5s ease-out;
  width: 100%; /* Ensure full width */
  min-height: 300px; /* Ensure minimum height */
  overflow: hidden; /* Avoid overflowing content */
  box-sizing: border-box; /* Ensure padding and borders are included in the width and height calculations */

  /* Container Style to ensure it aligns the page properly */
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .page-title-content h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    animation: slideUp 1s ease-out;
  }

  .page-title-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    gap: 20px;
    animation: fadeInUp 1s ease-out;
  }

  .page-title-content ul li {
    font-size: 18px;
    font-weight: 500;
    color: #f1f1f1;
    text-transform: capitalize;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }

  .page-title-content ul li:not(:last-child)::after {
    content: '/';
    margin: 0 10px;
    color: #f1f1f1;
  }

  .page-title-content ul li a {
    color: #f1f1f1;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    font-weight: 600;
  }

  .page-title-content ul li a:hover {
    color: #ff9b00; /* Elegant gold hover color */
    transform: translateY(-2px);
  }

  /* Keyframe Animations */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
