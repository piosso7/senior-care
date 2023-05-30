import { Outlet, NavLink } from "react-router-dom";
import Logo from "../pictures/LogoCareHome.svg";

const Layout = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo"></img>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/amenities">
              Amenities
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/cost-&-payment">
              Cost & Payment
            </NavLink>
          </li>
        </ul>
        <button>Contact Us</button>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
