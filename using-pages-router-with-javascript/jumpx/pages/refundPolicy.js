import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="refund-container">
      <header className="header">
        <h1 className="title">Refund Policy</h1>
        <p className="subtitle">We value your satisfaction. Please read our refund policy below.</p>
      </header>

      <section className="policy-section">
        <h2 className="section-title">1. Eligibility for Refunds</h2>
        <p className="section-content">
          Refunds are applicable under the following conditions:
        </p>
        <ul className="list">
          <li>Service Dissatisfaction: If the service provided does not meet the agreed-upon specifications or quality standards.</li>
          <li>Payment Errors: If a payment was processed incorrectly or charged multiple times for the same service.</li>
          <li>Unforeseen Issues: If we are unable to deliver the purchased service within the agreed timeline due to technical or operational issues on our part.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="section-title">2. Non-Refundable Items</h2>
        <p className="section-content">
          Certain services may not be eligible for a refund, including but not limited to:
        </p>
        <ul className="list">
          <li>Customized services that have already been initiated or completed.</li>
          <li>Payments for services that have been successfully rendered or delivered.</li>
          <li>Any third-party service fees or charges that are non-refundable.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="section-title">3. Refund Process</h2>
        <p className="section-content">
          To request a refund, please contact us at <a href="mailto:support@easy2buyhub.com" className="email-link">support@easy2buyhub.com</a> within <strong>7 days</strong> of the purchase. Include the following details in your request:
        </p>
        <ul className="list">
          <li>Order number or service ID.</li>
          <li>A brief explanation of the reason for the refund request.</li>
          <li>Any relevant documentation or screenshots to support your claim.</li>
        </ul>
        <p className="section-content">
          Once we receive your request, our team will review it and notify you of the outcome within <strong>7 business days</strong>.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-title">4. Partial Refunds</h2>
        <p className="section-content">
          In some cases, we may offer partial refunds based on the extent of the service provided. The amount will be calculated based on the work completed up to the point of cancellation.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-title">5. Refund Timeframe</h2>
        <p className="section-content">
          Refunds will be processed within <strong>10-14 business days</strong> from the approval date, depending on your payment method and bank processing times.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-title">6. Contact Us</h2>
        <p className="section-content">
          If you have any questions or concerns regarding our refund policy, please feel free to reach out to our customer support team at <a href="mailto:support@easy2buyhub.com" className="email-link">support@easy2buyhub.com</a>. We are here to assist you.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Easy2BuyHub. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .refund-container {
          font-family: 'Roboto', sans-serif;
          background-color: #f4f7fb;
          color: #333;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 8px;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a202c;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #4a5568;
          margin-top: 10px;
        }

        .policy-section {
          margin-bottom: 40px;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 10px;
        }

        .section-content {
          font-size: 1.1rem;
          color: #4a5568;
          margin-bottom: 15px;
        }

        .list {
          list-style-type: disc;
          margin-left: 20px;
          color: #4a5568;
        }

        .email-link {
          color: #3182ce;
          text-decoration: none;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        .footer {
          text-align: center;
          margin-top: 50px;
          font-size: 1rem;
          color: #4a5568;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .section-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RefundPolicy;
