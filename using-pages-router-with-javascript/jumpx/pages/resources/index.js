import React from "react";
import Link from "next/link";
import Navbar from "../../components/Layouts/Navbar";

const Resources = () => {
  const brochures = [
    // ... brochures array remains same
  ];

  return (
    <>
      <Navbar />
      
      <style jsx>{`
        .resources-container {
          padding: 120px 20px 80px;
          background: linear-gradient(to bottom, #f8f9ff, #ffffff);
        }
        // ... rest of the styles remain same
      `}</style>

      <div className="resources-container">
        {/* ... rest of the JSX remains same */}
      </div>
    </>
  );
};

export default Resources; 