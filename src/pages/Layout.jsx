import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";

import Logo from "../pictures/LogoCareHome.svg";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <nav className={isActive ? "menu active" : "menu"}>
        <img src={Logo} alt="Logo"></img>
        <ul>
          <li>
            <NavLink onClick={handleClick} className="link" to="/senior-care">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className="link" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className="link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className="link" to="/amenities">
              Amenities
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              className="link"
              to="/cost-&-payment"
            >
              Cost & Payment
            </NavLink>
          </li>
        </ul>
        <button>Contact Us</button>
        <Icon
          onClick={handleClick}
          className="bars"
          path={isActive ? mdiClose : mdiMenu}
          size={2}
        />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
