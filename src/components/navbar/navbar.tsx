import React from "react";
import logo from "../../logo.svg";
import "./navbar.css";
import "../../styles/container.css";

function Navbar() {
  return (
    <div>
      <header className="app-header container">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Fustal Evolution</p>
      </header>
    </div>
  );
}

export default Navbar;
