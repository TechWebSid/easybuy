// /pages/index.js
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner"; // Assuming MainBanner for Home 2
import Features from "../components/HomeTwo/Features"; // Assuming Features for Home 2
import About from "../components/HomeTwo/About"; // Assuming About for Home 2
import WhyChooseUs from "../components/HomeOne/WhyChooseUs"; // Assuming WhyChooseUs for Home 2
import Services from "../components/HomeTwo/Services"; // Assuming Services for Home 2
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/HomeTwo/WhatWeOffer"; // Assuming WhatWeOffer for Home 2
import Testimonials from "../components/Common/Testimonials";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import Link from 'next/link';

export default function IndexPage() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <About />

      <WhyChooseUs />

      <Services />

      <MakeYourBusiness />

      <WhatWeOffer />

      <Testimonials />

      <News />

   

      <Footer />
    </>
  );
}
