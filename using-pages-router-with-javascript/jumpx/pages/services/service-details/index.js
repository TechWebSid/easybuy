import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function ServiceDetailsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        activePageText="Transform your ideas into reality with our expert web & app development, scalable e-commerce solutions, and seamless API integrations tailored to meet your business needs and accelerate growth"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
