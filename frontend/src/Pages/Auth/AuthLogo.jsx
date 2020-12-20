import React from "react";

import logo from "./Media/logo.svg";

import "./AuthLogo.scss";

export default function AuthLogo() {
  return (
    <div className="auth-logo">
      <div className="logo-wrapper">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <p>
          Flash<span>Card</span>
        </p>
      </div>
    </div>
  );
}
