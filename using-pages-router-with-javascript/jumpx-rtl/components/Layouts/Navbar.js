import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/white-logo.png";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={150} height={37} />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Home <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Home One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-2/"
                        className={`nav-link ${
                          currentPath == "/index-2/" && "active"
                        }`}
                      >
                        Home Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-3/"
                        className={`nav-link ${
                          currentPath == "/index-3/" && "active"
                        }`}
                      >
                        Home Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-4/"
                        className={`nav-link ${
                          currentPath == "/index-4/" && "active"
                        }`}
                      >
                        Home Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-5/"
                        className={`nav-link ${
                          currentPath == "/index-5/" && "active"
                        }`}
                      >
                        Home Five
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    About <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/about/"
                        className={`nav-link ${
                          currentPath == "/about/" && "active"
                        }`}
                      >
                        About Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/about-2/"
                        className={`nav-link ${
                          currentPath == "/about-2/" && "active"
                        }`}
                      >
                        About Style Two
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Services <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/style-2/"
                        className={`nav-link ${
                          currentPath == "/services/style-2/" && "active"
                        }`}
                      >
                        Services Style Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/style-3/"
                        className={`nav-link ${
                          currentPath == "/services/style-3/" && "active"
                        }`}
                      >
                        Services Style Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/style-4/"
                        className={`nav-link ${
                          currentPath == "/services/style-4/" && "active"
                        }`}
                      >
                        Services Style Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/service-details/"
                        className={`nav-link ${
                          currentPath == "/services/service-details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    Pages <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/testimonials/"
                        className={`nav-link ${
                          currentPath == "/testimonials/" && "active"
                        }`}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        Faq
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/auth/login/"
                        className={`nav-link ${
                          currentPath == "/auth/login/" && "active"
                        }`}
                      >
                        Login
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/auth/sign-up/"
                        className={`nav-link ${
                          currentPath == "/auth/sign-up/" && "active"
                        }`}
                      >
                        Sign Up
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/terms-conditions/"
                        className={`nav-link ${
                          currentPath == "/terms-conditions/" && "active"
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/privacy-policy/"
                        className={`nav-link ${
                          currentPath == "/privacy-policy/" && "active"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 error
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    News <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/news/"
                        className={`nav-link ${
                          currentPath == "/news/" && "active"
                        }`}
                      >
                        News Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/news/news-right-sidebar/"
                        className={`nav-link ${
                          currentPath == "/news/news-right-sidebar/" && "active"
                        }`}
                      >
                        News Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/news/news-details/"
                        className={`nav-link ${
                          currentPath == "/news/news-details/" && "active"
                        }`}
                      >
                        News Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        Contact Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact-2/"
                        className={`nav-link ${
                          currentPath == "/contact-2/" && "active"
                        }`}
                      >
                        Contact Style Two
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-options">
                <Link href="/auth/login/" className="default-btn">
                  Log In <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
