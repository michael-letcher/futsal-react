import React, { useEffect } from "react";
import logo from "../../logo.svg";
import "./navbar.scss";
import "../../styles/container.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="app-header container">
        <img src={logo} className="app-logo" alt="logo" />
        <span>Fustal Evolution</span>
      </header>
      <nav className="nav-bar">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Venues</Link>
            </li>
            <li>
              <Link to="/about">Rules</Link>
            </li>
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
