import { useState } from 'react';
import Head from 'next/head';

const Quotation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: 'basic',
    requirements: '',
    budget: '',
    timeline: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setSubmitMessage('Thank you for your request! We will get back to you with a quotation shortly.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Get Your Quotation - EasyBuy</title>
        <meta name="description" content="Request a custom quotation for your business needs" />
      </Head>

      <div className="quotation-container">
        <div className="form-wrapper">
          <h1>Get Your Custom Quotation</h1>
          <p className="subtitle">Tell us about your requirements and we'll create a personalized quote for you</p>

          <form onSubmit={handleSubmit} className="quotation-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="plan">Select Plan</label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="basic">Basic Plan</option>
                  <option value="professional">Standard Plan</option>
                  <option value="enterprise">Premium Plan</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="requirements">Project Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your project requirements in detail..."
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget">Expected Budget</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="in Rupees"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Project Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Enter the deadline in weeks"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Request Quotation
            </button>
          </form>

          {submitMessage && (
            <div className="success-message">
              {submitMessage}
            </div>
          )}
        </div>

        <style jsx>{`
          .quotation-container {
            min-height: 100vh;
            padding: 40px 20px;
            background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .form-wrapper {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 900px;
          }

          h1 {
            color: #2d3748;
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-align: center;
          }

          .subtitle {
            color: #718096;
            text-align: center;
            margin-bottom: 40px;
          }

          .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 32px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group.full-width {
            grid-column: 1 / -1;
          }

          label {
            color: #4a5568;
            margin-bottom: 8px;
            font-weight: 500;
          }

          input, select, textarea {
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #4299e1;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
          }

          textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submit-btn {
            background: #4299e1;
            color: white;
            padding: 16px 32px;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
          }

          .submit-btn:hover {
            background: #3182ce;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);
          }

          @media (max-width: 768px) {
            .form-grid {
              grid-template-columns: 1fr;
            }

            .form-wrapper {
              padding: 24px;
            }

            h1 {
              font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .quotation-container {
              padding: 20px 16px;
            }

            h1 {
              font-size: 1.75rem;
            }

            .form-wrapper {
              padding: 20px;
            }
          }

          .success-message {
            margin-top: 24px;
            padding: 16px;
            background-color: #c6f6d5;
            color: #2f855a;
            border-radius: 10px;
            text-align: center;
            font-weight: 500;
            animation: fadeIn 0.5s ease-in;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Quotation; 