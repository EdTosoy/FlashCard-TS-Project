import React from "react";

import logo from "./Media/logo.svg";
import "./Logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-wrapper">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
}
