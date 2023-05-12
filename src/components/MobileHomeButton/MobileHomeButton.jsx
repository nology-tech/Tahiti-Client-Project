import React from "react";
import { Link } from "react-router-dom";
import iconHouse from "../../assets/images/black-home-icon.png";
import "./MobileHomeButton.scss";

const MobileHomeButton = () => {
  return (
    <div className="home">
      <Link to="/home" className="homeButton">
        <img src={iconHouse} alt="" />
        <h1>HOME</h1>
      </Link>
    </div>
  );
};

export default MobileHomeButton;
