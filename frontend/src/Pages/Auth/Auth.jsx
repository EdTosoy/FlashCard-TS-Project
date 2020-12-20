import React, { useState } from "react";

import "./Auth.scss";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Auth() {
  const [authStatus, setAuthStatus] = useState(true);
  return (
    <div className="auth">
      <AuthHeader />

      <main>
        <div className="text">
          <h1>Memories</h1>
          <p>
            Save lasting memories, stories and photos with family and friends.
          </p>
          <h2>Read More</h2>
        </div>

        {authStatus ? (
          <SignInForm setAuthStatus={setAuthStatus} />
        ) : (
          <SignUpForm setAuthStatus={setAuthStatus} />
        )}
      </main>

      <AuthFooter />
    </div>
  );
}
