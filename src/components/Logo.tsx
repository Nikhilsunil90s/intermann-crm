import React from 'react';
import logo from "../images/logo.svg";
import logoText from "../images/logo-text.svg";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="d-flex justify-content-center align-items-center logo-wrap">
        <div className="logo-img">
            <img src={logo} alt="Intermann Logo" width="100%" />
        </div>
        <div className="logo-text">
            <img src={logoText} alt="Intermann Logo Text" width="100%" />
        </div>
    </div>
  )
}
