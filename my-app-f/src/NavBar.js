// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "./assets/ezgif-3-53ea3d767a.gif";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <div>
          <Link to="/home">
            <img className="logo-img" src={logoImage} alt="logo" />
          </Link>
        </div>
        <div>
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
