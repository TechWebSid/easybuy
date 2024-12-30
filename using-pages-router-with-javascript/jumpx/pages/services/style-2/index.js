import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleTwo from "../../../components/Services/ServicesStyleTwo";
import MakeYourBusiness from "../../../components/Common/MakeYourBusiness";
import WhatWeOffer from "../../../components/Services/WhatWeOffer";
import Footer from "../../../components/Layouts/Footer";

export default function Services2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        activePageText="Empowering your business with seamless web & app development, e-commerce solutions, and custom API integrations to drive success."
      />

      <ServicesStyleTwo />

      <MakeYourBusiness />

      <WhatWeOffer />

      <Footer />
    </>
  );
}
