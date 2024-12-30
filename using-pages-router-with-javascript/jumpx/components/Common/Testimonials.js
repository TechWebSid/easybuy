import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "Siddhartha Srivastava",
    designation: "",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "https://images.pexels.com/photos/5528969/pexels-photo-5528969.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Praharsh Singh",
    designation: "Happy Client",
    feedbackText:
     "Highly professional and reliable! Their expertise has significantly boosted our business growth and efficiency."

,

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "https://images.pexels.com/photos/4295983/pexels-photo-4295983.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shivam Rai",
    designation: "Happy Client",
    feedbackText:
      "Exceptional service and innovative solutions! Easy2BuyHub truly understands client needs and delivers beyond expectations.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "https://images.pexels.com/photos/27972368/pexels-photo-27972368/free-photo-of-a-man-in-a-suit-and-tie-is-drinking-coffee.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Siddhartha Srivastava",
    designation: "Happy Client",
    feedbackText:
     "Outstanding support and results! Easy2BuyHub is the go-to partner for transforming ideas into reality."
,

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="client-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Clients Say About Us</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slide"
          >
            {testimonialsData &&
              testimonialsData.slice(0, 10).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={70}
                        height={70}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
