import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Pricing from "../components/HomeTwo/Pricing";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Our Pricing Plans</h2>
            <p>Choose the perfect plan for your needs</p>
          </div>
        </div>
      </div>
      <Pricing />
    </>
  );
};

export default PricingPage;
