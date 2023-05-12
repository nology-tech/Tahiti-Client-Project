import React from "react";
import "./MobileNavButton.scss";
import Arrow from "../../assets/images/right-arrow-gold.svg";

const MobileNavButton = ({ name }) => {
  return (
    <div className="mobileButton">
      <h1>{name}</h1>
      <img src={Arrow} alt="" />
    </div>
  );
};

export default MobileNavButton;
