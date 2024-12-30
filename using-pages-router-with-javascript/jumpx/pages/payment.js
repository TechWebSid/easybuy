// pages/payment.js
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const PaymentPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Dynamically load the Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_KyJVvNWUBa5r0B", // Replace with your Razorpay key
      amount: 50000, // Amount in paise (50000 = 500 INR)
      currency: "INR",
      name: "Easy2BuyHub", // Updated name
      description: "Seamless E-commerce Experience", // Updated description
      image: "https://your-logo-url.com/logo.png", // Optional logo
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // Redirect to /index-2 after successful payment
        router.push("/index-2");
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some address",
      },
      theme: {
        color: "#F37254", // Customize the theme color
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-page">
      <div className="container text-center">
        <h2>Proceed with Payment</h2>
        <p className="mt-3 text-lg">
          Complete your payment to proceed with your order and enjoy our seamless e-commerce experience.
        </p>
        <button
          className="default-btn btn-two w-100 rounded-pill py-3 mt-4 text-white bg-primary hover:bg-darkblue transition-all duration-300"
          onClick={handlePayment} // Trigger Razorpay payment
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
