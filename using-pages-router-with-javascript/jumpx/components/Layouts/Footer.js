import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/white-logo.png";
import shape1 from "../../public/images/shape/footer-shape-one.png";
import shape2 from "../../public/images/shape/footer-shape-two.png";
import easy from "../../public/images/easy2buyhub.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <Image src={easy} alt="logo" width={150} height={37} />
                </Link>

                <p>
                Easy2BuyHub is a leading IT service company dedicated to providing innovative and customized solutions to meet diverse business needs. We focus on delivering excellence, efficiency, and value to help clients achieve their goals.
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Customize websites
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      E-commerce solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      SEO optimizations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Full stack development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      API Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Important Links</h3>

                <ul>
                  <li>
                    <Link href="/about">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h3>Information</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>Phone</span>
                    +91 8299585163
                  </li>
                  <li className="address">
  <i className="flaticon-envelope"></i>
  <span>Email</span>
  <a href="mailto:customercare@easy2buyhub.com">customercare@easy2buyhub.com</a>
</li>


                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Address</span>
                   Lucknow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <Image src={shape1} alt="Image" width={270} height={235} />
          <Image src={shape2} alt="Image" width={270} height={235} />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; {currentYear} easy2buyhub. All Rights Reserved</p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="designed">
                <p>
                  Designed by <i className="bx bx-heart"></i>{" "}
                  <a href="https://envytheme.com/" target="_blank"
                  style={{ marginLeft: "4px" }}
                  >
                    easy2buyhub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
