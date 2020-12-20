import React from "react";

import "./SignUpSignInForm.scss";

export default function SignUpForm({ setAuthStatus }) {
  const handleClick = () => {
    setAuthStatus((prevValue) => !prevValue);
  };
  return (
    <form action="" className="auth-form">
      <h1>Sign Up your Account</h1>
      <input type="text" name="username" id="username" placeholder="Username" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
      <button>Continue with Google</button>
      <p>
        Have no Account? <span onClick={handleClick}>Sign In</span>
      </p>
    </form>
  );
}
