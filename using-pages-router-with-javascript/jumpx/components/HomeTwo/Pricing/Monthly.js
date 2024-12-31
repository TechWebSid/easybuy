import React from "react";
import Link from "next/link";

const Monthly = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Basic</h3>
              <p>Empower Your Business With Us</p>
            </div>

            <div className="pricing-circle">
              <p className="discount-percentage">-21%</p>
              <p className="original-price">
                <s>₹10,888</s>
              </p>
              <p className="discounted-price">₹8,999/-</p>
              <p className="inclusive-taxes">Inclusive of all taxes</p>
            </div>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Simple Website Creation 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service Integration
              </li>
              <li>
                <i className="bx bx-check"></i>
                Landing Pages 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Graphic Designing
              </li>
              <li>
                <i className="bx bx-check"></i>
                Custom Logo Designs
              </li>
              <li>
                <i className="bx bx-check"></i>
                2 Revisions
              </li>
              <li>
                <i className="bx bx-x"></i>
                Lead Generation And Sales Support 
              </li>
              <li>
                <i className="bx bx-x"></i>
                Chatbot and Digital Assistance
              </li>
              <li>
                <i className="bx bx-x"></i>
                Negotiable Delivery Time
              </li>
              <li>
                <i className="bx bx-x"></i>
              Private Communication Channels
              </li>
              <li>
                <i className="bx bx-x"></i>
                Multipage Landing Page Website  
              </li>
              <li>
                <i className="bx bx-x"></i>
                SEO Support 
              </li>
              <li>
                <i className="bx bx-x"></i>
                Design + Development
              </li>
            </ul>

            <Link href="/contact" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <strong className="popular-badge">Most Subscribed</strong>

            <div className="pricing-top-heading">
              <h3>Standard</h3>
              <p>Empower Your Business With Us</p>
            </div>

            <div className="pricing-circle">
              <p className="discount-percentage">-21%</p>
              <p className="original-price">
                <s>₹22,988</s>
              </p>
              <p className="discounted-price">₹18,999/-</p>
              <p className="inclusive-taxes">Inclusive of all taxes</p>
            </div>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Simple Website Creation 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service Integration
              </li>
              <li>
                <i className="bx bx-check"></i>
                Landing Pages 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Graphic Designing
              </li>
              <li>
                <i className="bx bx-check"></i>
                Custom Logo Designs
              </li>
              <li>
                <i className="bx bx-check"></i>
                2 Revisions
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation And Sales Support 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Chatbot and Digital Assistance
              </li>
              <li>
                <i className="bx bx-check"></i>
                Negotiable Delivery Time
              </li>
              <li>
                <i className="bx bx-check"></i>
              Private Communication Channels
              </li>
              <li>
                <i className="bx bx-x"></i>
                Multipage Landing Page Website  
              </li>
              <li>
                <i className="bx bx-x"></i>
                SEO Support 
              </li>
              <li>
                <i className="bx bx-x"></i>
                Design + Development
              </li>
            </ul>

            <Link href="/contact" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Premium</h3>
              <p>Empower Your Business With Us</p>
            </div>

            <div className="pricing-circle">
              <p className="discount-percentage">-21%</p>
              <p className="original-price">
                <s>₹60,498</s>
              </p>
              <p className="discounted-price">₹49,999/- </p>
              <p className="inclusive-taxes">Inclusive of all taxes</p>
             
            </div>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Simple Website Creation 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service Integration
              </li>
              <li>
                <i className="bx bx-check"></i>
                Landing Pages 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Graphic Designing
              </li>
              <li>
                <i className="bx bx-check"></i>
                Custom Logo Designs
              </li>
              <li>
                <i className="bx bx-check"></i>
                2 Revisions
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation And Sales Support 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Chatbot and Digital Assistance
              </li>
              <li>
                <i className="bx bx-check"></i>
                Negotiable Delivery Time
              </li>
              <li>
                <i className="bx bx-check"></i>
              Private Communication Channels
              </li>
              <li>
                <i className="bx bx-check"></i>
                Multipage Landing Page Website  
              </li>
              <li>
                <i className="bx bx-check"></i>
                SEO Support 
              </li>
              <li>
                <i className="bx bx-check"></i>
                Design + Development
              </li>
            </ul>

            <Link href="/contact" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .single-pricing {
          text-align: center;
          border: 1px solid #e0e0e0;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          position: relative;
        }

        .pricing-top-heading h3 {
          font-size: 40px;
          font-weight: bold;
          margin-top:20px
        }

        .pricing-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: #f5f5f5;
          margin: 0 auto 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }
             .inclusive-taxes {
          font-size: 12px;
          color: gray;
          margin-top: 5px;
        }

        .discount-percentage {
          font-size: 16px;
          font-weight: bold;
          color: #ff0000;
          margin-bottom: 0.3px;
          
        }

        .original-price {
          font-size: 14px;
          color: #888;
          margin: 5px 0;
        }

        .discounted-price {
          font-size: 18px;
          font-weight: bold;
          color: #000;
        }

        .default-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }

        .default-btn:hover {
          background-color: #0056b3;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul li {
          margin: 10px 0;
        }

        ul li i {
          margin-right: 10px;
          color: #007bff;
        }

        ul li .bx-x {
          color: #ff0000;
        }

   .inclusive-taxes {
          font-size: 12px;
          color: #999;
          margin-top: 5px;
        }

        .popular-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ff4d4f;
          color: white;
          padding: 5px 19px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 50px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }
      `}</style>
    </>
  );
};

export default Monthly;
