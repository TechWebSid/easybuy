import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";
import Footer from "../components/Layouts/Footer";

export default function Contact2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        
        activePageText="For any assistance, reach out to us at customercare@easy2buyhub.com or call us at +91 8299585163. We’re here to help!"
      />

      <ContactInfo />

      <ContactFormStyleTwo />

      <Footer />
    </>
  );
}
