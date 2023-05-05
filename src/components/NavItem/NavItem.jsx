import React from "react";
import "./NavItem.scss";

const NavItem = ({ name, image }) => {
  return (
    <div className="SideNavComponent">
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default NavItem;
