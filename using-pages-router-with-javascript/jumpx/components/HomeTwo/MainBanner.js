import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerMainImg from "../../public/images/home-two/main-img2.png";

// Banner Shape Images
import bannerShape1 from "../../public/images/home-two/shape1.png";
import bannerShape2 from "../../public/images/home-two/shape2.png";
import bannerShape3 from "../../public/images/home-two/shape3.png";
import bannerShape4 from "../../public/images/home-two/shape4.png";
import bannerShape5 from "../../public/images/home-two/shape5.png";
import bannerShape6 from "../../public/images/home-two/shape6.png";
import bannerShape7 from "../../public/images/home-two/shape7.png";
import bannerShape8 from "../../public/images/home-two/shape8.png";
import bannerShape9 from "../../public/images/home-two/shape9.png";
import bannerShape10 from "../../public/images/home-two/shape10.png";

// Animate Shape Images
import animateShape1 from "../../public/images/home-one/shape/animate1.png";
import animateShape2 from "../../public/images/home-one/shape/animate2.png";
import animateShape3 from "../../public/images/home-one/shape/animate3.png";

const MainBanner = () => {
  return (
    <>
      <section className="main-banner-area main-banner-area-two">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                 SNT Rudra Tech Limited Liability Partnership
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
               SNT Rudra Tech LLP is a leading IT service company and a proud member of the SNT Rudra Group. With a team of more than 28 skilled professionals, we are dedicated to providing innovative and customized solutions to meet diverse business needs. Our commitment lies in delivering excellence, efficiency, and value, ensuring that our clients achieve their goals with the highest standards of service.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/about-2" className="default-btn">
                    Learn More
                  </Link>

                  <Link href="/contact-2" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <Image
                  src={bannerMainImg}
                  alt="Image"
                  width={1020}
                  height={703}
                />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <Image
                  className="animate__animated animate__fadeInDown animate__faster"
                  src={bannerShape1}
                  alt="Image"
                  width={449}
                  height={320}
                />

                <div className="square-img">
                  <Image
                    className="animate__animated animate__fadeInDown animate__delay-0.1s"
                    src={bannerShape2}
                    alt="Image"
                    width={445}
                    height={303}
                  />
                </div>

                <Image
                  className="animate__animated animate__fadeInDown animate__fast"
                  src={bannerShape3}
                  alt="Image"
                  width={210}
                  height={390}
                />

                <div className="circle-img">
                  <Image
                    className="animate__animated animate__zoomIn animate__delay-0.1s"
                    src={bannerShape4}
                    alt="Image"
                    width={441}
                    height={441}
                  />
                </div>

                <Image
                  src={bannerShape5}
                  alt="Image"
                  width={199}
                  height={143}
                />

                <Image
                  className="animate__animated animate__fadeInDown animate__delay-0.1s"
                  src={bannerShape6}
                  alt="Image"
                  width={350}
                  height={285}
                />

                <Image
                  className="animate__animated animate__fadeInDown animate__delay-0.6s"
                  src={bannerShape7}
                  alt="Image"
                  width={300}
                  height={400}
                />

                <Image
                  className="animate__animated animate__fadeInRight animate__delay-0.1s"
                  src={bannerShape8}
                  alt="Image"
                  width={288}
                  height={174}
                />

                <Image
                  className="animate__animated animate__fadeInRight animate__delay-0.1s"
                  src={bannerShape9}
                  alt="Image"
                  width={422}
                  height={259}
                />

                <Image
                  className="animate__animated animate__fadeInRight animate__delay-1s"
                  src={bannerShape10}
                  alt="Image"
                  width={73}
                  height={45}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <Image src={animateShape1} alt="Image" width={68} height={74} />
          <Image src={animateShape2} alt="Image" width={32} height={27} />
          <Image src={animateShape3} alt="Image" width={150} height={119} />
        </div>
      </section>
    </>
  );
};

export default MainBanner;
