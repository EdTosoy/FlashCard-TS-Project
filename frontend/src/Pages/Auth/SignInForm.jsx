import React from "react";

import "./SignUpSignInForm.scss";

export default function SignInForm({ setAuthStatus }) {
  const handleClick = () => {
    setAuthStatus((prevValue) => !prevValue);
  };
  return (
    <form action="" className="auth-form">
      <h1>Log In your Account</h1>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Email or phone number"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
      <button>Continue with Google</button>
      <p>
        Have no Account? <span onClick={handleClick}>Sign Up</span>
      </p>
    </form>
  );
}
