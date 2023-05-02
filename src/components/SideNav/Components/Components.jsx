import React from "react";
import "./Components.scss"


const components = (name, image) => {
  return (
    <div className="SideNav">
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
    

  );
};

export default components;
