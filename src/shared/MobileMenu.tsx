import { NavLink } from "react-router-dom";
import { useMobileMenuStore } from "../store/useMobileMenuStore";
import "../shared/MobileMenu.css";

export const MobileMenu = () => {
  const { closeModal } = useMobileMenuStore();

  return (
    <div className="mobile-menu">
      <ul className="mobile-menu-links">
        <li className="mobile-nav-item">
          <NavLink className={"nav-link"} onClick={closeModal} to={"/work"}>
            <span className="link-text">Work</span>
          </NavLink>
        </li>
        <li className="mobile-nav-item">
          <NavLink className={"nav-link"} onClick={closeModal} to={"/about"}>
            <span className="link-text">About</span>
          </NavLink>
        </li>
        <li className="mobile-nav-item">
          <NavLink className={"nav-link"} onClick={closeModal} to={"/contact"}>
            <span className="link-text">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
