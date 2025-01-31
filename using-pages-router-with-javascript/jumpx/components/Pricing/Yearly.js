import React from "react";
import Link from "next/link";

const Yearly = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Basic</h3>
              <p>Build A Website</p>
            </div>
            <span>
              $39<sub>/y</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Drag & Drop Builder
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation & Sales
              </li>
              <li>
                <i className="bx bx-check"></i>
                Boot & Digital Assistants
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service
              </li>
              <li>
                <i className="bx bx-x"></i>
                Up to 1000 Subscribers
              </li>
              <li>
                <i className="bx bx-x"></i>
                Unlimited Broadcasts
              </li>
              <li>
                <i className="bx bx-x"></i>
                Landing Pages & Web Widgets
              </li>
            </ul>

            {/* Correct usage of Link component without <a> tag */}
            <Link href="/payment">
              <button className="default-btn">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Standard</h3>
              <p>Build A Website</p>
            </div>
            <span>
              $79<sub>/y</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Drag & Drop Builder
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation & Sales
              </li>
              <li>
                <i className="bx bx-check"></i>
                Boot & Digital Assistants
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service
              </li>
              <li>
                <i className="bx bx-check"></i>
                Up to 1000 Subscribers
              </li>
              <li>
                <i className="bx bx-x"></i>
                Unlimited Broadcasts
              </li>
              <li>
                <i className="bx bx-x"></i>
                Landing Pages & Web Widgets
              </li>
            </ul>

            {/* Correct usage of Link component without <a> tag */}
            <Link href="/payment">
              <button className="default-btn">Get Started</button>
            </Link>

            <strong className="popular">Popular</strong>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Premium</h3>
              <p>Build A Website</p>
            </div>
            <span>
            ₹8999<sub>/y</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Drag & Drop Builder
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation & Sales
              </li>
              <li>
                <i className="bx bx-check"></i>
                Boot & Digital Assistants
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service
              </li>
              <li>
                <i className="bx bx-check"></i>
                Up to 1000 Subscribers
              </li>
              <li>
                <i className="bx bx-check"></i>
                Unlimited Broadcasts
              </li>
              <li>
                <i className="bx bx-check"></i>
                Landing Pages & Web Widgets
              </li>
            </ul>

            {/* Correct usage of Link component without <a> tag */}
            <Link href="/payment">
              <button className="default-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yearly;
