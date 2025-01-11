import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    // script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handlePayment = () => {
    if (!isScriptLoaded) {
      alert("Payment system is still loading. Please try again in a moment.");
      return;
    }

    try {
      const options = {
        key: "rzp_test_KyJVvNWUBa5 ",
        amount: 50000,
        currency: "INR",
        name: "Easy2BuyHub",
        description: "Seamless E-commerce Experience",
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          window.location.href = "/";
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#4F46E5",
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
      <div className="payment-container">
        <div className="payment-card">
          <div className="payment-header">
            <div className="header-content">
              <h1>Complete Your Payment</h1>
              <p>Secure payment gateway for your transaction</p>
            </div>
          </div>
          
          <div className="payment-content">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-items">
                <div className="summary-item">
                  <span>Product Total</span>
                  <span>₹8999.00</span>
                </div>
            
                <div className="summary-total">
                  <span>Total Amount</span>
                  <span>₹8999.00</span>
                </div>
              </div>
            </div>

            <div className="payment-features">
              <div className="feature">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure Payment</span>
              </div>
              <div className="feature">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fast Processing</span>
              </div>
              <div className="feature">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Safe</span>
              </div>
            </div>

            

            <button onClick={handlePayment} className="pay-button">
              Pay ₹8999.00 Securely
            </button>

            <div className="payment-footer">
              <div className="secure-badge">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Protected by SSL Certificate</span>
              </div>
              <div className="accepted-cards">
                <span>We Accept</span>
                <div className="card-icons">
                  <div className="card-icon">VISA</div>
                  <div className="card-icon">UPI</div>
                  <div className="card-icon">Netbanking</div>
                  <div className="card-icon">Digital Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-container {
          min-height: 100vh;
          padding: 32px 16px;
       background: linear-gradient(135deg, #0f172a 0%, #1f2937 100%);
  }
        .payment-card {
          max-width: 520px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .payment-header {
          background: #4F46E5;
          padding: 28px 32px;
          text-align: center;
        }

        .header-content h1 {
          color: white;
          font-size: 26px;
          font-weight: bold;
          margin: 0 0 8px 0;
        }

        .header-content p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          margin: 0;
        }

        .payment-content {
          padding: 32px;
        }

        .order-summary {
          margin-bottom: 32px;
        }

        .order-summary h2 {
          font-size: 20px;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .summary-items {
          background: #f8faff;
          padding: 20px;
          border-radius: 12px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          color: #4b5563;
          font-size: 15px;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          padding-top: 16px;
          margin-top: 12px;
          border-top: 2px dashed #e5e7eb;
          font-weight: 600;
          font-size: 18px;
          color: #1f2937;
        }

        .payment-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
          color: #4F46E5;
        }

        .feature svg {
          margin-bottom: 8px;
        }

        .feature span {
          font-size: 14px;
          font-weight: 500;
        }

        .payment-options {
          margin-bottom: 32px;
        }

        .payment-options h2 {
          font-size: 20px;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .method-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .method-card {
          padding: 16px;
          background: #f8faff;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .method-card.active {
          border-color: #4F46E5;
          background: #f5f7ff;
        }

        .method-name {
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
        }

        .check-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          color: #4F46E5;
          font-weight: bold;
        }

        .pay-button {
          width: 100%;
          padding: 18px;
          background: #4F46E5;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-bottom: 24px;
        }

        .pay-button:hover {
          background: #4338ca;
        }

        .payment-footer {
          border-top: 1px solid #e5e7eb;
          padding-top: 24px;
        }

        .secure-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5563;
          margin-bottom: 20px;
        }

        .secure-badge svg {
          margin-right: 8px;
          color: #4F46E5;
        }

        .accepted-cards {
          text-align: center;
        }

        .accepted-cards span {
          display: block;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 12px;
        }

        .card-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .card-icon {
          padding: 8px 12px;
          background: #f8faff;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #4F46E5;
        }

        @media (max-width: 480px) {
          .payment-content {
            padding: 24px;
          }

          .payment-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .method-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default PaymentPage;