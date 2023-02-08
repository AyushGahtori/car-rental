import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        document.querySelector(".home-link").style.color = "#ff4d30";
        break;
      case "/about":
        document.querySelector(".about-link").style.color = "#ff4d30";
        break;
      case "/models":
        document.querySelector(".models-link").style.color = "#ff4d30";
        break;
      case "/testimonials":
        document.querySelector(".testi-link").style.color = "#ff4d30";
        break;
      case "/team":
        document.querySelector(".team-link").style.color = "#ff4d30";
        break;
      case "/contact":
        document.querySelector(".contact-link").style.color = "#ff4d30";
        break;
      default:
        document.querySelector(".home-link").style.color = "#ff4d30";
    }
  });

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Models</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.top(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li className="home-link">Home</li>
            <li className="about-link">About</li>
            <li className="models-link">Vehicle Models</li>
            <li className="testi-link">Testimonials</li>
            <li className="team-link">Out Team</li>
            <li className="contact-link">Contact</li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
