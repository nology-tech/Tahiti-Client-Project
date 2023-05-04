import React from "react";
import "./LoginForm.scss";

const LoginForm = ({ email, password, emailInput, passwordInput }) => {
  return (
    <div className="form-container">
      <label className="form-container__label">Email Address</label>
      <input className="form-container__input" onInput={emailInput} type="text" value={email} />
      <label className="form-container__label">Password</label>
      <input className="form-container__input" onInput={passwordInput} type="text" value={password} />
    </div>
  );
};

export default LoginForm;
