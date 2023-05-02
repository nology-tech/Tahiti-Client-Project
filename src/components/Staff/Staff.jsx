import "./Staff.scss";
import React from "react";

const Staff = ({ staffNumber, staffImage, jobTitle }) => {
  return (
    <div className="staff-card">
      <img className="staff-card__img" src={staffImage} alt="staff-image" />
      <h1 className="staff-card__name">Staff {staffNumber}</h1>
      <h3 className="staff-card__title">{jobTitle}</h3>
    </div>
  );
};
export default Staff;
