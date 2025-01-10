// pages/payment.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Footer from "../components/Layouts/Footer";

const PaymentPage = () => {
  const router = useRouter();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    
    script.onload = () => {
      setIsScriptLoaded(true);
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!isScriptLoaded) {
      alert("Payment system is still loading. Please try again in a moment.");
      return;
    }

    try {
      const options = {
        key: "rzp_test_KyJVvNWUBa5r0B",
        amount: 50000,
        currency: "INR",
        name: "Easy2BuyHub",
        description: "Seamless E-commerce Experience",
        image: "/images/logo.png",
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          router.push("/");
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
          color: "#1d42d9",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      alert("Something went wrong with the payment initialization. Please try again.");
    }
  };

  return (
    <>
     
      <div className="ptb-100">
        <div className="container">
          <div className="payment-wrapper">
            <div className="section-title">
              <h2>Complete Your Payment</h2>
              <div className="bar"></div>
            </div>

            <div className="payment-content text-center">
              <div className="payment-box">
                <div className="payment-info mb-4">
                  <h3>Order Summary</h3>
                  <div className="amount-details mt-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>₹500.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax:</span>
                      <span>₹0.00</span>
                    </div>
                    <div className="d-flex justify-content-between total-amount">
                      <strong>Total:</strong>
                      <strong>₹500.00</strong>
                    </div>
                  </div>
                </div>

                <div className="secure-payment-note mb-4">
                  <i className="fas fa-lock mr-2"></i>
                  <span>Your payment information is secure with us</span>
                </div>

                <button
                  className="default-btn"
                  onClick={handlePayment}
                >
                  Proceed to Pay <span></span>
                </button>

                <div className="payment-methods mt-4">
                  <p>We Accept:</p>
                  <div className="method-icons">
                    <i className="fab fa-cc-visa mx-2"></i>
                    <i className="fab fa-cc-mastercard mx-2"></i>
                    <i className="fab fa-cc-amex mx-2"></i>
                    <i className="fas fa-credit-card mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
