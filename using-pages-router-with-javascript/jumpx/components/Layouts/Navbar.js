import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/white-logo.png";
import easy from "../../public/images/easy2buyhub.png";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  // Redirect from / to /index-2
  useEffect(() => {
    if (router.asPath === "/") {
      router.push("/index-2"); // Redirect to Home 2
    } else {
      setCurrentPath(router.asPath);
    }
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
              <Image src={easy} alt="logo" width={150} height={37} />
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
                  <Link href="/index-2/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/about-2/" className="nav-link">
                    About
                  </Link>
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
                        href="/services/style-2/"
                        className={`nav-link ${
                          currentPath == "/services/style-2/" && "active"
                        }`}
                      >
                        Our Services
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
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
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

                {/* Removed dropdown from Contact */}
                <li className="nav-item">
                  <Link
                    href="/contact-2/"
                    className={`nav-link ${
                      currentPath == "/contact-2/" && "active"
                    }`}
                  >
                    Contact
                  </Link>
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
