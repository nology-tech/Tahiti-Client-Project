import React from "react";
import "./Button.scss";
import Plus from "../../assets/images/plus-icon-save-button.svg";

const Button = ({ name, variant, image, onClick }) => {
  let buttonStyle = "button";

  switch (variant) {
    case "yellowWide":
      buttonStyle += " yellowWide";
      break;
    case "yellowMid":
      buttonStyle += " yellowMid";
      break;
    case "yellowNarrow":
      buttonStyle += " yellowNarrow";
      break;
    case "grayMid":
      buttonStyle += " grayMid";
      break;
  }

  return (
    <div>
      {image && <img className="plusButton" src={Plus} alt="plus-arrow" />}
      <button className={buttonStyle} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
