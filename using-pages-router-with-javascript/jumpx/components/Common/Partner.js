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
      <h1 className="partners-heading">Recognized by</h1>
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
                      layout="intrinsic" // This maintains the aspect ratio
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-heading {
          text-align: center;
          color: #301934; 
          font-size: 37px; /* Adjust the font size */
          font-weight: bold;
          margin-bottom: 30px; /* Space below the heading */
        }

        .brand-area {
          margin-top: 40px;
        }

        .brand-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .single-brand {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 150px;
        }

        .single-brand a {
          display: block;
        }
      `}</style>
    </>
  );
};

export default Partner;
