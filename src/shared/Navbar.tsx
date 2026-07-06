import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useMobileMenuStore } from "../store/useMobileMenuStore";
import { useIsMobile } from "../hooks/useIsMobile";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [fullName, setfullName] = useState(false);
  const isMobile = useIsMobile();
  const { isOpen, openModal, closeModal } = useMobileMenuStore();

  const toggleMenu = () => {
    isOpen ? closeModal() : openModal();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li
          className="logo z-above"
          onMouseEnter={() => setfullName(true)}
          onMouseLeave={() => setfullName(false)}
        >
          <Link to={"/home"}>
            <span className="main-link-text">
              {fullName ? (
                <span className="typing-effect">
                  Alphax@<span className="cursor">_</span>
                </span>
              ) : (
                <>
                  A:<span className="cursor">\</span>
                </>
              )}
            </span>
          </Link>
        </li>

        {isMobile ? (
          <div className="nav-mobile-toggle z-above">
            <button
              onClick={toggleMenu}
              className={`menu-button ${isOpen ? "active" : ""}`}
              aria-label="Abrir menú"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        ) : (
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
        )}
      </ul>

      {isMobile && isOpen && <MobileMenu />}
    </nav>
  );
};
