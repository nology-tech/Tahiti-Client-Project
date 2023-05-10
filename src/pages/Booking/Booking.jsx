import React from "react";
import "./Booking.scss";
import SideNav from "../../components/SideNav/SideNav";
import Button from "../../components/Button/Button";

const Booking = () => {
  return (
    <div>
      <h1>Booking</h1>
      <SideNav />
      <div className="buttons">
        <Button variant="grayMid" name="Cancel" />
        <Button variant="yellowMid" name="Save" />
      </div>
    </div>
  );
};

export default Booking;
