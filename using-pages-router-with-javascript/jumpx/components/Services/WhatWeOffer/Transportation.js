import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer2.png";

const Transportation = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Transportation</h3>
            <p>
  The transportation industry is vital for connecting people, goods, and services across the globe. It drives economic growth, enhances mobility, and fosters global trade through efficient and reliable networks.
</p>
<p>
  Our focus is on delivering innovative transportation solutions that prioritize safety, sustainability, and efficiency. By leveraging modern technologies and smart logistics, we help businesses and individuals move forward seamlessly.
</p>


            <div className="row">
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
            </div>

            <div className="text-center">
              <Link href="/services/style-2" className="default-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={offerImg} alt="Image" width={644} height={445} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation;
