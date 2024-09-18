import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo_JHR.png";

const Header = () => {
  return (
    <nav className="Header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" width={60} />
        </div>
        <div className="nav-links">
          <a href="#home">About us</a>
          <a href="#about">Services</a>
          <a href="#services">Contact</a>
          <button className="nav-button">Take to Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
