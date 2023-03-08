import React from "react";

import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          Zena
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Prototype">Use the Prototype!</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
