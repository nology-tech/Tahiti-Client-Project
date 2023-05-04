import React from "react";
import "./LoginForm.scss";

const LoginForm = ({userName, password}) => {
  return (
    <div className="form-container">
      <label className="form-container__label">Email Address</label>
      <input className="form-container__input" value={userName} type="text" />
      <label className="form-container__label">Password</label>
      <input className="form-container__input" value={password} type="text" />
    </div>
  );
};

export default LoginForm;
