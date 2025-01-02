import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../public/images/about-img.png";

const About = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <Image src={aboutImg} alt="Image" width={490} height={420} />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="900"
              >
                <span>About Us</span>
                <h2>
                  We Complete Every Project With Extra Care As Customer Need
                </h2>
                <p>
                We take pride in completing every project with exceptional care, ensuring it aligns perfectly with customer needs. Our dedicated approach guarantees high-quality results, combining expertise and attention to detail for a truly outstanding experience.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Custom Websites
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Digital Marketing
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        SEO Optimization
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        FullStack Development
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Free extra support
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Optimized stack
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about-2" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
