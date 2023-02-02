import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.top(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>Home</li>
            <li>About</li>
            <li>Vehicle Models</li>
            <li>Testimonials</li>
            <li>Out Team</li>
            <li>Contact</li>
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
          <div className="mobile-hamb">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
