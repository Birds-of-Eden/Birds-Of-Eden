// src/components/LogoSpinner.jsx
import React from "react";
import logo from "../assets/boedl1.png";

const LogoSpinner = () => {
  return (
    <div className="logo-spinner-container">
      <img src={logo} alt="Birds of Eden Logo" className="logo-spinner" />
    </div>
  );
};

export default LogoSpinner;
