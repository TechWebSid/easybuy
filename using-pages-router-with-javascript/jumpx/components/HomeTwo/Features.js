import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-shopping-bag",
    title: "IT Consultancy",
    shortText:
      "Expert guidance to optimize your technology and drive business success.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-engineer",
    title: "Development",
    shortText:
      "Tailored solutions to bring your ideas to life with precision and efficiency.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "flaticon-success",
    title: "UI/UX Strategy",
    shortText:
      "Crafting intuitive designs for seamless and engaging user experiences.",
    viewDetails: "/services/service-details/",
    aosDelay: "900",
  },
];

const Features = () => {
  return (
    <>
      <div className="features-area mt-minus-70 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link href={value.viewDetails} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
