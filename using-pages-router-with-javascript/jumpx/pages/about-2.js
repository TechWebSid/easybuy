import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";

export default function About2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        activePageText="Discover our story, values, and commitment to excellence. We are passionate about creating a meaningful impact and building a brighter future together."
      />

      <About />

      <WhyChooseUs />

      <MakeYourBusiness />

      <Testimonials />

      <PartnerSlider />

      <Footer />
    </>
  );
}
