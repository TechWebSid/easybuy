import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer1.png";

const HeavyIndustry = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={370} height={390} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Heavy Industry</h3>
            <p>
  The heavy industry sector is a cornerstone of global infrastructure, driving advancements in manufacturing, construction, and energy production. It plays a pivotal role in building the backbone of modern economies.
</p>
<p>
  Our focus is on delivering innovative solutions that enhance efficiency, safety, and sustainability in heavy industries. From cutting-edge machinery to streamlined processes, we empower industries to achieve their full potential.
</p>


            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Opportunities
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Creating
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Industries
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Security
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Highest
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Priority
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

export default HeavyIndustry;
