import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer4.png";

const Manufacturing = () => {
  return (
    <>
      <div className="row  align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Manufacturing</h3>
            <p>
  The manufacturing industry is the backbone of global production, driving innovation and delivering high-quality products to meet diverse consumer needs. It encompasses advanced technologies and sustainable practices to enhance efficiency.
</p>
<p>
  Our solutions are tailored to streamline manufacturing processes, reduce costs, and improve output. By embracing modern technologies and automation, we help manufacturers stay competitive in an ever-evolving marketplace.
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

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={offerImg} alt="Image" width={526} height={445} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manufacturing;
