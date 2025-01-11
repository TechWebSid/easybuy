import React from "react";
import Navbar from "../../components/Layouts/Navbar.js";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer.js";
import LoginForm from "../../components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Login"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Login"
      />

      <LoginForm />

      <Footer />
    </>
  );
}
