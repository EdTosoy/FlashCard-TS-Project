import React from "react";

import AuthLogo from "./AuthLogo";
import AuthNavigation from "./AuthNavigation";

import "./AuthHeader.scss";

export default function AuthHeader() {
  return (
    <div className="auth-header">
      <div className="header-content">
        <AuthLogo />
        <AuthNavigation />
      </div>
    </div>
  );
}
