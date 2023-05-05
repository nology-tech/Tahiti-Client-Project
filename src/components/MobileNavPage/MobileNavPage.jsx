import React from "react";
import "./MobileNavPage.scss";
import MobileNavButton from "../MobileNavButton/MobileNavButton";
import { NavLink } from "react-router-dom";


const MobileNavPage = () => {
  return (
    <div className="MobileNav">
      <NavLink
          to="/booking"
          style={{ textDecoration: "none" }}
        >
          <MobileNavButton name="New Booking" />
        </NavLink>

        <NavLink
          to="/staff"
          style={{ textDecoration: "none" }}
        >
          <MobileNavButton name="Staff Details" />
        </NavLink>

        <NavLink
          to="/clients"
          style={{ textDecoration: "none" }}
        >
          <MobileNavButton name="Client Details" />
        </NavLink>

        <NavLink
          to="/resources"
          style={{ textDecoration: "none" }}
        >
          <MobileNavButton name="Resources" />
        </NavLink>

        <NavLink
          to="/settings"
          style={{ textDecoration: "none" }}
        >
          <MobileNavButton name="Settings" />
        </NavLink>
    
    </div>
  );
};

export default MobileNavPage;
