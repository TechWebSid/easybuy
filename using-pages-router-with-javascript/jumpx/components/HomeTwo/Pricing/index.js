import React from "react";
import Monthly from "./Monthly";
import Yearly from "./Yearly";
import Free from "./Free"

const Pricing = () => {
  const openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " current";
  };

  return (
    <>
      <section className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>What We Offer</span>
            <h2>Our Pricing Plan For You</h2>
            <p>
            SNTRUDRA Tech Group, the proud owner of Easy2BuyHub, offers exceptional services on quarterly and yearly plans, along with a range of free add-ons like logo design, brochures, and 24×7 customer support—all at highly discounted rates. Choose us for affordability and quality in every package!
            </p>
          </div>

          <div className="tab quote-list-tab">
            {/* Tabs */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => openTabSection(e, "tab1")}
              >
                <span>Quaterly</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab2")}>
                <span>Yearly</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab3")}>
                <span>Free</span>
              </li>
            </ul>

            <div className="tab_content">
              <div id="tab1" className="tabs_item" style={{ display: "block" }}>
                <Monthly />
              </div>

              <div id="tab2" className="tabs_item">
                <Yearly />
              </div>

              <div id="tab3" className="tabs_item">
                <Free />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
