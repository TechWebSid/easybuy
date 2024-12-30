import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TermsAndConditionsContent from "../components/TermsAndConditions/TermsAndConditionsContent";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <TermsAndConditionsContent />

      <Footer />
    </>
  );
}
