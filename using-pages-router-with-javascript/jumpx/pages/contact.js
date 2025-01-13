import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState({
    status: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ status: "loading", message: "Sending..." });

    try {
      // Instead of using nodemailer, use a third-party form service
      // Example using Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          status: "success",
          message: "Thank you for contacting us! We'll get back to you soon."
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        status: "error",
        message: "Failed to send message. Please try again later."
      });
    }
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
        <title>Contact Us - Easy2BuyHub | Get in Touch for IT Solutions</title>
        <meta 
          name="description" 
          content="Contact Easy2BuyHub for professional IT solutions, web development, SEO, and digital marketing services. Get expert consultation and support for your business needs." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.easy2buyhub.com/contact" />
      </Head>

      <Navbar />

      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Contact us for any queries about our services</p>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <button type="submit" className="default-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {submitStatus.status && (
              <div className={`alert alert-${submitStatus.status === "success" ? "success" : "danger"}`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
