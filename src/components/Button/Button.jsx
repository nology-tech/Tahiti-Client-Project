import React from "react";
import "./Button.scss";

const Button = ({ name, isYellow }) => {
  return (
    <button className={buttonStyle} isYellow={true}>
      {name}
    </button>
  );
};

export default Button;
