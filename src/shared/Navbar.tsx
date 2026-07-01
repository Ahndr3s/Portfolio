import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to={"/home"}>
            <span className="main-link-text">
              A:<span className="cursor">\</span>
            </span>
          </Link>
        </li>
        <div className={`nav-elements`}>
          <ul>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/work"}>
                <span className="link-text">Work</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/about"}>
                <span className="link-text">About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/contact"}>
                <span className="link-text">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};
