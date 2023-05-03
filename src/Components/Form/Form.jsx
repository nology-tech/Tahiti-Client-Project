import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <label className="form-container__label">Email Address</label>
      <input className="form-container__input" type="text" />
      <label className="form-container__label">Password</label>
      <input className="form-container__input" type="text" />
    </div>
  );
};

export default Form;