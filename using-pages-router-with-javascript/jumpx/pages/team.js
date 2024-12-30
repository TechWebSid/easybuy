import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamCard from "../components/Team/TeamCard";
import Footer from "../components/Layouts/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard />

      <Footer />
    </>
  );
}
