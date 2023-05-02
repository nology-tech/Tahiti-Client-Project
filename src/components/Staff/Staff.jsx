import "./Staff.scss";
import React from "react";
import StaffImage from "../../assets/images/Staff Image.svg"

const Staff = () => {
  return (
    <div className="staff-card">
      <img
        className="staff-card__img"
        src={StaffImage}
        alt=""
      />
      <h1 className="staff-card__name">Staff 01</h1>
      <h3 className="staff-card__title">Dev</h3>
    </div>
  );
};
export default Staff;
