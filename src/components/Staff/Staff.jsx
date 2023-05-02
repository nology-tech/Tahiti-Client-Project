import "./Staff.scss";
import React from "react";

const Staff = ({ staffNumber, image, jobTitle }) => {
  return (
    <div className="staff-card">
      <img className="staff-card__img" src={image} alt="staff-image" />
      <h1 className="staff-card__name" staffNumber={staffNumber}></h1>
      <h3 className="staff-card__title" jobTitle={jobTitle}></h3>
    </div>
  );
};
export default Staff;
