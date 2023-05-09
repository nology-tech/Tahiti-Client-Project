import React from "react";
import "./LoginForm.scss";
import { useState } from "react";

const LoginForm = ({ email, password, emailInput, passwordInput }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);

  const handleSetPassword = (e) => {
    passwordInput(e.target.value);
  };

  const handleSetEmail = (e) => {
    emailInput(e.target.value);
    if (!e.target.value.includes("@" && ".")) {
      setEmailErrorMessage(true);
    } else {
      setEmailErrorMessage(false);
    }
  };

  return (
    <div className="form-container">
      <label className="form-container__label">Email Address</label>
      <input
        className="form-container__input"
        onInput={handleSetEmail}
        type="text"
        value={email}
      />
      <div>
        {emailErrorMessage && (
          <p className="form-container__error">Your email must be valid...</p>
        )}
      </div>

      <label className="form-container__label">Password</label>
      <input
        className="form-container__input"
        onInput={handleSetPassword}
        type="password"
        value={password}
      />
    </div>
  );
};

export default LoginForm;
