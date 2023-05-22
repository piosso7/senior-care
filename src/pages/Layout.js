import { Outlet, Link } from "react-router-dom";
import Logo from "../pictures/LogoCareHome.svg";

const Layout = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo"></img>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="link" to="/amenities">
              Amenities
            </Link>
          </li>
          <li>
            <Link className="link" to="/cost-&-payment">
              Cost & Payment
            </Link>
          </li>
        </ul>
        <button>Contact Us</button>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
