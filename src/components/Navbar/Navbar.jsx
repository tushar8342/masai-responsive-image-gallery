import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faImages,
  faEnvelope,
  faInfoCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#gallery">
              <FontAwesomeIcon icon={faImages} /> Gallery
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-hamburger"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
