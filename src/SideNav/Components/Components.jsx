import React from "react";
import "./Components.scss";

const Components = ({ name, image} ) => {
  return (
    <div className="SideNavComponent">
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Components;
