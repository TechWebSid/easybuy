import React from "react";
import Link from "next/link";

const MakeYourBusiness = () => {
  return (
    <>
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>Make Your Business More Competitive And Enduring</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>Advance Technology Integration</h3>
                <p>
                Seamlessly blending innovation and expertise to deliver cutting-edge solutions that transform businesses and enhance everyday experiences.
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>A Community With A Unique Mission</h3>
                <p>
                A collective driven by shared goals, innovation, and purpose, working together to create meaningful impact and lasting change.
                </p>
              </div>

              <div className="business-btn">
                <Link href="/about-2" className="default-btn">
                  Know Details
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">95%</span>
                    </h2>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">90%</span>
                    </h2>
                    <p>Design</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">85%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">80</span>
                    </h2>
                    <p>Award Win</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeYourBusiness;
