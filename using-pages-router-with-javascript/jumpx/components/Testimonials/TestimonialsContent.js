import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "Aarav Kumar",
    designation: "Happy Client",
    feedbackText:
      "Great experience! The team provided excellent service and support.",

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
    image: "/images/clients/client2.jpg",
    name: "Isha Sharma",
    designation: "Happy Client",
    feedbackText:
      "Highly satisfied with the services. They delivered on time and exceeded expectations.",

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
    image: "/images/clients/client3.jpg",
    name: "Rohan Patel",
    designation: "Happy Client",
    feedbackText:
      "Impressive work! The team is responsive and professional. Highly recommended.",

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
    image: "/images/clients/client4.jpg",
    name: "Priya Verma",
    designation: "Happy Client",
    feedbackText:
      "Fantastic service! They understood our needs and delivered exactly what we wanted.",

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
    image: "/images/clients/client5.jpg",
    name: "Saanvi Rao",
    designation: "Happy Client",
    feedbackText:
      "Excellent experience. The team was supportive and professional throughout.",

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
    image: "/images/clients/client6.jpg",
    name: "Arjun Singh",
    designation: "Happy Client",
    feedbackText:
      "I’m very happy with the results. The service was fast and efficient.",

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
    image: "/images/clients/client7.jpg",
    name: "Neha Gupta",
    designation: "Happy Client",
    feedbackText:
      "A wonderful experience. The team went above and beyond to meet our needs.",

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
    image: "/images/clients/client8.jpg",
    name: "Devansh Mehta",
    designation: "Happy Client",
    feedbackText:
      "Very satisfied with the service. The team was professional and efficient.",

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
    image: "/images/clients/client9.jpg",
    name: "Tara Joshi",
    designation: "Happy Client",
    feedbackText:
      "Amazing service! The team was responsive and delivered exactly what we wanted.",

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

const TestimonialsContent = () => {
  return (
    <>
      <section className="client-area inner-client-page ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {testimonialsData &&
              testimonialsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
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
                </div>
              ))}

           
            
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsContent;
