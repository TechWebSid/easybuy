import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import { toast } from 'react-toastify';

import logo from "../../public/images/white-logo.png";
import easy from "../../public/images/easy2buyhub.png";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check login status using the backend API
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('https://easyback.vercel.app/api/user/check-session', {
          withCredentials: true,
        });
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error('Error checking session:', error);
        setIsLoggedIn(false);
      }
    };

    checkSession();
    
    const handleRouteChange = () => {
      checkSession();
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await axios.post(
        'https://easyback.vercel.app/api/user/logout',
        {},
        { withCredentials: true }
      );
      
      setIsLoggedIn(false);
      toast.success('Logged out successfully!');
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out. Please try again.');
    }
  };

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
    <div id="navbar" className="navbar-area fixed-top">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={easy} alt="logo" width={150} height={37} />
          </Link>

          {/* Custom Toggle navigation */}
          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={menu ? "false" : "true"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
                <Link href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                  Services <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/services/style-2/" className="nav-link">
                      Our Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/tender/Tender/" className="nav-link">
                      Contract
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/news" className="nav-link">
                  Blog <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/news" className="nav-link">
                      Blog Grid
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/news/news-details" className="nav-link">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/careers/" className="nav-link">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-2/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            {/* <div className="others-options">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="default-btn">
                  Logout <i className="bx bx-log-out-circle"></i>
                </button>
              ) : (
                <Link href="/auth/login" className="default-btn">
                  Log In <i className="bx bx-log-in-circle"></i>
                </Link>
              )}
            </div> */}
          </div>
        </div>
      </nav>

      <style jsx>{`
      
      `}</style>
    </div>
  );
};

export default Navbar;
