import React, { useState } from "react";
import "./TopNav.scss";

const TopNav = ({ heading, buttonTitle, showButton }) => {
  const [staffChosen, setStaffChosen] = useState("");

  const staffNames = ["Leonardo", "Raphael", "Michaelangelo", "Donatelo"];

  const handleStaff = (event) => {
    setStaffChosen(event.target.value);
  };

  return (
    <div className="topnav">
      <div className="topnav__header">
        <h1 className="topnav__heading">{heading}</h1>

        {showButton && (
          <button className="topnav__button">{buttonTitle}</button>
        )}
      </div>
      <select
        value={staffChosen}
        onChange={handleStaff}
        className="topnav__dropdown"
      >
        <option value="">Choose Staff</option>
        {staffNames.map((staff, index) => (
          <option key={index} value={staff}>
            {staff}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopNav;