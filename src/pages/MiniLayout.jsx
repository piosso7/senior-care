import { Outlet, NavLink } from "react-router-dom";

const MiniLayout = () => {
  return (
    <>
      <nav className="miniLayout">
        <ul>
          <li>
            <NavLink className="miniLink" to="/senior-care">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="miniLink" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="miniLink" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="miniLink" to="/amenities">
              Amenities
            </NavLink>
          </li>
          <li>
            <NavLink className="miniLink" to="/cost-&-payment">
              Cost & Payment
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default MiniLayout;
