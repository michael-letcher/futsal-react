import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";
import "../../styles/container.css";
import { Link } from "react-router-dom";
import { AppUrls } from "../../app-router";

function Navbar() {
  return (
    <div>
      <header className="app-header container">
        <img src={logo} className="app-logo" alt="logo" />
        <span>Evolution Fustal</span>
      </header>
      <nav className="nav-bar">
        <div className="container">
          <ul>
            <li>
              <Link to={AppUrls.home}>Home</Link>
            </li>
            <li>
              <Link to={AppUrls.about}>About</Link>
            </li>
            <li>
              <Link to={AppUrls.venues}>Venues</Link>
            </li>
            <li>
              <Link to={AppUrls.home}>Rules</Link>
            </li>
            <li>
              <Link to={AppUrls.matches}>Matches</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
