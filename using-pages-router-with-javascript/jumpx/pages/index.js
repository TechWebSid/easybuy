import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner";
import Features from "../components/HomeTwo/Features";
import About from "../components/HomeTwo/About";
import Services from "../components/HomeTwo/Services";
import Pricing from "../components/HomeTwo/Pricing";
import Newsletter from "../components/Common/Newsletter";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import WhatWeOffer from "../components/HomeTwo/WhatWeOffer";
import News from "../components/Common/News";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import InternshipPopup from "../components/Common/InternshipPopup";
import InternshipButton from "../components/Common/InternshipButton";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasClosedOnce, setHasClosedOnce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosedOnce) {
        setIsPopupOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasClosedOnce]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setHasClosedOnce(true);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Head>
        <title>Easy2BuyHub - Leading IT Solutions & Digital Services Company | Web Development, SEO, Digital Marketing</title>
        <meta 
          name="description" 
          content="Easy2BuyHub offers comprehensive IT solutions" 
        />
        <meta 
          name="keywords" 
          content="IT services company, web development, digital marketing agency, SEO services, full stack development, business IT solutions, software development company India, custom website development, mobile app development, e-commerce solutions, API integration, cloud services, IT consulting, digital transformation" 
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Easy2BuyHub" />
        <meta property="og:title" content="Easy2BuyHub - Complete IT & Digital Solutions for Modern Businesses" />
        <meta property="og:description" content="Transform your business with Easy2BuyHub's comprehensive IT solutions. Expert web development, SEO, digital marketing, and technology services." />
        <meta property="og:image" content="https://www.easy2buyhub.com/images/og-home.jpg" />
        <meta property="og:url" content="https://www.easy2buyhub.com" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@easy2buyhub" />
        <meta name="twitter:title" content="Easy2BuyHub - IT Solutions & Digital Services" />
        <meta name="twitter:description" content="Your trusted partner for web development, SEO, digital marketing & IT solutions." />
        <meta name="twitter:image" content="https://www.easy2buyhub.com/images/twitter-card.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.easy2buyhub.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Easy2BuyHub",
              "url": "https://www.easy2buyhub.com",
              "logo": "https://www.easy2buyhub.com/images/logo.png",
              "description": "Professional IT solutions and digital services company",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Industrial Area Near Sitapur City Mall, Lakhimpur Road",
                "addressLocality": "Sitapur",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "261001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8317068532",
                "contactType": "customer service",
                "email": "customercare@easy2buyhub.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/easy2buyhub",
                "https://twitter.com/easy2buyhub",
                "https://www.linkedin.com/company/easy2buyhub",
                "https://www.instagram.com/easy2buyhub"
              ]
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Easy2BuyHub",
              "url": "https://www.easy2buyhub.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.easy2buyhub.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Easy2BuyHub",
              "image": "https://www.easy2buyhub.com/images/logo.png",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Industrial Area Near Sitapur City Mall, Lakhimpur Road",
                "addressLocality": "Sitapur",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "261001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.583904",
                "longitude": "80.666359"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </Head>

      <main>
        <Navbar />
        <InternshipButton onClick={handleOpenPopup} />
        <MainBanner />
        <Features />
        <About />
        <Services />
        <Newsletter />
        <Pricing />
        <MakeYourBusiness />
        <Testimonials />
        <WhatWeOffer />
        <News />
        <div className="pb-50">
          <Partner />
        </div>
        <Footer />
      </main>

      <div>
        <InternshipPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>

      <style jsx>{`
        main {
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          /* Your responsive styles */
        }
      `}</style>
    </>
  );
}
