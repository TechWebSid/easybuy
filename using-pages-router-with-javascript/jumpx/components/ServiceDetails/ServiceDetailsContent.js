import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";
import Image from "next/image";

import servicesDetailsImg from "../../public/images/services-details/services-details.jpg";
import servicesDetailsImg2 from "../../public/images/services-details/services-details2.png";

const ServiceDetailsContent = () => {
  return (
    <>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src={servicesDetailsImg}
                    alt="Image"
                    width={900}
                    height={500}
                  />
                </div>

                <h3>Comprehensive IT Services</h3>
                <p>
                  Our IT service offerings are tailored to empower businesses in the digital age. 
                  From web development and app development to digital marketing, we provide a 
                  full spectrum of services to help you achieve your business goals.
                </p>

                <p>
                  Our web development solutions focus on creating responsive, user-friendly, 
                  and visually appealing websites that reflect your brand identity. Whether you 
                  need an e-commerce platform, a corporate website, or a portfolio site, our team 
                  delivers exceptional results tailored to your requirements.
                </p>

                <p>
                  In the realm of app development, we specialize in building feature-rich, 
                  cross-platform mobile applications. Our solutions ensure seamless user 
                  experiences and robust functionality, designed to engage your audience 
                  effectively on any device.
                </p>

                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <Image
                          src={servicesDetailsImg2}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="car-service-list">
                        <h4>Our Key Services</h4>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Custom Web Development
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Mobile App Development
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            SEO and Digital Marketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            E-Commerce Solutions
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            UI/UX Design Services
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  With our digital marketing expertise, we help you reach your target audience 
                  effectively through SEO, social media marketing, content creation, and paid 
                  advertising campaigns. Our strategies are data-driven and designed to deliver 
                  measurable results.
                </p>

                <p>
                  Partner with us to unlock your business's full potential. We are dedicated 
                  to delivering innovative solutions, unmatched quality, and ongoing support 
                  to ensure your success in the digital world.
                </p>

                <AskQuestionForm />
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsContent;
