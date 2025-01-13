import React from "react";

const Free = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div
            className="single-pricing"
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div className="pricing-top-heading">
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Free Add-Ons
              </h3>
              <h6
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#666",
                  marginBottom: "10px",
                }}
              >
                (Only With Premium Service)
              </h6>
              <p style={{ fontSize: "16px", color: "#777", marginBottom: "20px" }}>
                Empower Your Business with Us
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: "0", marginBottom: "20px" }}>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                24x7 Customer Support
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                One Professional Printable Brochure
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                One Letterhead
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                One Video Ad Support
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Virtual Invitation Card
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                One Professional Visiting Card
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Review Support
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Technical Assistance
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Quality Documents
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                One Free E-Course Material for Educational Purposes (Related to IT)
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Social Media - LinkedIn
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Social Media - Instagram
              </li>
              <li style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <i
                  className="bx bx-check"
                  style={{ color: "#28a745", marginRight: "8px" }}
                ></i>
                Social Media - Facebook
              </li>
            </ul>

            <a
              href="/services/style-2"
              style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "30px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .single-pricing:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </>
  );
};

export default Free;
