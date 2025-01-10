import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
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
        key: "rzp_test_KyJVvNWUBa5r0B",
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
            <h1>Complete Your Payment</h1>
          </div>
          
          <div className="payment-content">
            <div className="amount-display">
              <div className="amount-row">
                <span className="amount-label">Total Amount</span>
                <div className="amount-value">
                  <span className="price">₹8999.00</span>
                  <span className="tax-note">Including all taxes</span>
                </div>
              </div>
            </div>

            <div className="security-badge">
              <svg 
                width="20" 
                height="20" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
              <span>Secured by Razorpay</span>
            </div>

            <button onClick={handlePayment} className="pay-button">
              Pay Now
            </button>

            <div className="payment-methods">
              <p>Accepted Payment Methods</p>
              <div className="method-cards">
                <div className="method-card">VISA</div>
                <div className="method-card">UPI</div>
                <div className="method-card">NetBanking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-container {
          min-height: 100vh;
          padding: 64px 16px;
          background: #f5f7ff;
        }

        .payment-card {
          max-width: 480px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .payment-header {
          background: #4F46E5;
          padding: 24px 32px;
          text-align: center;
        }

        .payment-header h1 {
          color: white;
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }

        .payment-content {
          padding: 32px;
        }

        .amount-display {
          background: #f8faff;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .amount-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .amount-label {
          font-size: 18px;
          color: #4b5563;
        }

        .amount-value {
          text-align: right;
        }

        .price {
          display: block;
          font-size: 28px;
          font-weight: bold;
          color: #4F46E5;
        }

        .tax-note {
          font-size: 14px;
          color: #6b7280;
        }

        .security-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
          color: #4b5563;
          margin-bottom: 32px;
        }

        .security-badge svg {
          color: #4F46E5;
          margin-right: 8px;
        }

        .security-badge span {
          font-size: 14px;
        }

        .pay-button {
          width: 100%;
          padding: 16px;
          background: #4F46E5;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .pay-button:hover {
          background: #4338ca;
        }

        .payment-methods {
          margin-top: 32px;
          text-align: center;
        }

        .payment-methods p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 12px;
        }

        .method-cards {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .method-card {
          width: 48px;
          height: 32px;
          background: #f8faff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: #4F46E5;
        }

        @media (max-width: 480px) {
          .payment-content {
            padding: 24px;
          }

          .price {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default PaymentPage;