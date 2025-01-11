import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const partnerData = [
  {
    image: "/images/brands/b1.png",
    url: "#",
  },
  {
    image: "/images/brands/b2.png",
    url: "#",
  },
  {
    image: "/images/brands/b3.png",
    url: "#",
  },
  {
    image: "/images/brands/b5.png",
    url: "#",
  },
  {
    image: "/images/brands/b6.jpg",
    url: "#",
  },
  {
    image: "/images/brands/b7.jpg",
    url: "#",
  },
  {
    image: "/images/brands/b8.jpg",
    url: "#",
  },
  {
    image: "/images/brands/b9.jpg",
    url: "#",
  },
  {
    image: "/images/brands/b11.jpg",
    url: "#",
  },
 
];

const PartnerSlider = () => {
  return (
    <>
      <div className="brand-area-two ptb-100">
        <div className="container">
          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="brand-slide text-center"
          >
            {partnerData &&
              partnerData.map((value, i) => (
                <SwiperSlide key={i}>
                  <a href={value.url} target="_blank">
                    <Image
                      src={value.image}
                      alt="Image"
                      width={130}
                      height={80}
                    />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
