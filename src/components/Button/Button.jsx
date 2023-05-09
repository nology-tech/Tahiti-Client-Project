import React from "react";
import "./Button.scss";
import Plus from "../../assets/images/plus-icon-save-button.svg"
import { useState } from "react";

const Button = ({ name, variant, image }) => {

  const [plusImage, setPlusImage] = useState(false)
  let buttonStyle = "button";

  if (image==true) {
    setPlusImage(!plusImage)
  }


  switch (variant) {
    case "yellowWide": 
      buttonStyle+=" yellowWide";
      break;
    case "yellowMid": 
      buttonStyle+=" yellowMid";
      break;
    case "yellowNarrow": 
      buttonStyle+=" yellowNarrow";
      break;
    case "grayMid": 
      buttonStyle+=" grayMid";
      break;
  }

  return (
    <div>
      {image&&{Plus}}
      <button className={buttonStyle}>
      {name}
    </button>

    </div>
    
  );
};

export default Button;
