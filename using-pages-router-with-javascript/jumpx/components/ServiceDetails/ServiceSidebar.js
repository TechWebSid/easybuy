import React from "react";
import Link from "next/link";

const ServiceSidebar = () => {
  return (
    <>
      <div className="service-sidebar-area">
        <div className="service-list">
          <h3 className="service-details-title">Facilities</h3>
          <ul>
            <li>
              <Link href="/services/service-details/">
                Technology
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/service-details/">
                Tips
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/service-details/">
                AI & IT
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/service-details/">
                Solution
                <i className="bx bx-check"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="service-list">
          <h3 className="service-details-title">Contact Info</h3>
          <ul>
            <li>
              +800 603 6035
              <i className="bx bx-phone-call bx-rotate-270"></i>
            </li>
            <li>
              hello@jumpx.com
              <i className="bx bx-envelope"></i>
            </li>
            <li>
              123, Western Road, Australia
              <i className="bx bx-location-plus"></i>
            </li>
            <li>
              9:00 AM – 8:00 PM
              <i className="bx bx-time"></i>
            </li>
          </ul>
        </div>
        <div className="why-choose-us">
  <h3 className="service-details-title">Why Choose Easy2BuyHub?</h3>
  <ul style={{ paddingLeft: "20px" }}>
    <li style={{ marginBottom: "20px" }}>
      <p style={{ lineHeight: "1.6" }}>
        <strong>Expert Team:</strong> Our team of experienced developers, designers, and strategists ensures the highest quality in all our services.
      </p>
    </li>
    <li style={{ marginBottom: "20px" }}>
      <p style={{ lineHeight: "1.6" }}>
        <strong>Customized Solutions:</strong> We offer tailored solutions for your business, ensuring you get exactly what you need.
      </p>
    </li>
    <li style={{ marginBottom: "20px" }}>
      <p style={{ lineHeight: "1.6" }}>
        <strong>On-Time Delivery:</strong> We pride ourselves on delivering projects on time, ensuring your business stays ahead of the competition.
      </p>
    </li>
    <li style={{ marginBottom: "20px" }}>
      <p style={{ lineHeight: "1.6" }}>
        <strong>Affordable Pricing:</strong> Our services are competitively priced, providing value without compromising on quality.
      </p>
    </li>
    <li style={{ marginBottom: "20px" }}>
      <p style={{ lineHeight: "1.6" }}>
        <strong>24/7 Support:</strong> We provide round-the-clock support to help you with any queries or issues.
      </p>
    </li>
  </ul>
</div>


      </div>
    </>
  );
};

export default ServiceSidebar;
