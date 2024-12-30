import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Customize Website ",
    shortText:
      "Start to Create visually stunning and responsive websites that reflect your brand identity and enhance user experience starting with low budget.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-vr",
    title: "E-commerce solutions",
    shortText:
      "Easy2BuyHub simplifies e-commerce by offering product listings, platform tie-ups, supplier networks, and comprehensive digital marketing.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-blockchain",
    title: "SEO optimaztion",
    shortText:
      "Boost your website's visibility and attract organic traffic through expert SEO strategies, improving rankings and engagement",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "flaticon-target",
    title: "Full Stack Development",
    shortText:
      "Deliver scalable and high-performance applications using modern technologies like React.js, Node.js, MongoDB, Next.js, Capacitor.js.",
    viewDetails: "/services/service-details/",
    aosDelay: "700",
  },
  {
    iconName: "flaticon-choice",
    title: "API Integration",
    shortText:
      "Enhance your applications by integrating third-party APIs seamlessly, improving functionality, enriching user experience, automating processes.",
    viewDetails: "/services/service-details/",
    aosDelay: "800",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Digital Marketing",
    shortText:
      "Accelerating growth through customized strategies and powerful digital solutions designed to elevate your business and maximize results.",
    viewDetails: "/services/service-details/",
    aosDelay: "900",
  },
];

const Services = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70 text-black">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h2>Our Professional Services For You</h2>
            <p>
            We offer tailored solutions designed to meet your unique requirements, combining expertise, innovation, and reliability to deliver exceptional results that drive success.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="single-offer rounded-4">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default Services;
