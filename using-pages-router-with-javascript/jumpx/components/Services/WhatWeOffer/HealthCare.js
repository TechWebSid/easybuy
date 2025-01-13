import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer3.png";

const HealthCare = () => {
  return (
    <>
      <div className="row  align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={620} height={445} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Health Care</h3>
            <p>
              The healthcare industry is evolving rapidly with advancements in technology, personalized medicine, and innovative treatment options. At the forefront of this transformation, we aim to deliver better patient outcomes and redefine the future of care.
            </p>
            <p>
              From improving access to healthcare services to leveraging data-driven insights, we focus on creating solutions that address the unique challenges of the industry. Together, we can build a healthier tomorrow for everyone.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Creating
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Consectetur
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Adipisicing
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Artificial
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Industry
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Opportunities
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services/style-2" className="default-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthCare;
