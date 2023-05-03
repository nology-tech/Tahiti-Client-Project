import React from "react";
import "./MobileNavButton.scss";
import { Link } from "react-router-dom";

const MobileNavButton = (name) => {
  return (
    <Link>
      <div className="mobileButton">
        <button>{name}</button>
      </div>
      ;
    </Link>
    
  );
};

export default MobileNavButton;
