import React from "react";
import "./LoginForm.scss";

const LoginForm = ({ email, password, emailInput, passwordInput }) => {
  const handleSetPassword = (e) => {
    passwordInput(e.target.value);
  };
  const handleSetEmail = (e) => {
    emailInput(e.target.value);
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
      <label className="form-container__label">Password</label>
      <input
        className="form-container__input"
        onInput={handleSetPassword}
        type="text"
        value={password}
      />
    </div>
  );
};

export default LoginForm;
