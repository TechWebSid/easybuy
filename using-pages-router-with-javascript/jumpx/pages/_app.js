import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import WhatsAppButton from '../components/HomeTwo/WhatsAppButton';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Easy2BuyHub - Digital Solution for your Businesses</title>
      </Head>

      <Component {...pageProps} />

      <WhatsAppButton />
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <ToastContainer position="top-right" />
    </>
  );
}

export default MyApp;
