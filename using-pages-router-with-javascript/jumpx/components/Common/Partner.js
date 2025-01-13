import React from "react";
import Image from "next/image";

const partnerData = [
  {
    image: "/images/brands/b1.png",
    url: "#",
    aosDelay: "100",
  },
  {
    image: "/images/brands/b2.png",
    url: "#",
    aosDelay: "200",
  },
  {
    image: "/images/brands/b3.png",
    url: "#",
    aosDelay: "300",
  },
  {
    image: "/images/brands/b5.png",
    url: "#",
    aosDelay: "400",
  },
  {
    image: "/images/brands/b6.jpg",
    url: "#",
    aosDelay: "300",
  },
  {
    image: "/images/brands/b7.jpg",
    url: "#",
    aosDelay: "600",
  },
  {
    image: "/images/brands/b8.jpg",
    url: "#",
    aosDelay: "700",
  },
  {
    image: "/images/brands/b9.jpg",
    url: "#",
    aosDelay: "800",
  },
  {
    image: "/images/brands/b10updated.png",
    url: "#",
    aosDelay: "900",
  },  
  {
    image: "/images/brands/b11.jpg",
    url: "#",
    aosDelay: "1000",
  },
];

const Partner = () => {
  return (
    <>
   
      <div className="brand-area">
        <div className="container">
          <div className="brand-list">
            {partnerData &&
              partnerData.map((value, i) => (
                <div
                  className="single-brand"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <a href={value.url} target="_blank">
                    <Image
                      src={value.image}
                      alt="Image"
                      width={130}
                      height={80}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
