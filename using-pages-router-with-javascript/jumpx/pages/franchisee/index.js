import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaHandshake, FaChartLine, FaQuestionCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const FranchiseePage = () => {
  const benefits = [
    { icon: <FaHandshake className="text-4xl" />, title: 'Brand Recognition', description: 'Leverage our established brand and reputation in the IT industry' },
    { icon: <FaGraduationCap className="text-4xl" />, title: 'Comprehensive Training', description: 'Get extensive training and ongoing support for your success' },
    { icon: <FaChartLine className="text-4xl" />, title: 'Growth Potential', description: 'Tap into the booming IT services market with proven business models' },
  ];

  const steps = [
    { number: '01', title: 'Application', description: 'Fill out our detailed franchise application form' },
    { number: '02', title: 'Meeting', description: 'Attend an introductory meeting with our team' },
    { number: '03', title: 'Agreement', description: 'Sign the franchise agreement and complete documentation' },
    { number: '04', title: 'Training', description: 'Undergo comprehensive training program' },
    { number: '05', title: 'Launch', description: 'Launch your Easy2BuyHub franchise' },
  ];

  const testimonials = [
 
    {
      name: 'Sarah Johnson',
      role: 'Franchise Owner - Chicago',
      content: 'The proven business model and ongoing support have helped me build a successful IT services business.',
      image: '/images/testimonial2.jpg',
    },
  ];

  const faqs = [
    {
      question: 'What is the initial investment required?',
      answer: 'The initial investment ranges from $50,000 to $100,000, including franchise fee, equipment, and working capital.',
    },
    {
      question: 'How long does it take to launch a franchise?',
      answer: 'Typically, it takes 2-3 months from signing the agreement to launching your franchise.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Partner with Easy2BuyHub – Empower Your Business with Proven IT Solutions
            </motion.h1>
            <p className="text-xl mb-8">Join our network of successful franchisees and unlock growth opportunities in the booming IT industry.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              Become a Franchisee <BsArrowRight />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Steps to Become a Franchisee</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Get Started Today</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <FaQuestionCircle className="text-blue-600 text-xl" />
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <p className="mt-4 text-gray-600 pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchiseePage; 