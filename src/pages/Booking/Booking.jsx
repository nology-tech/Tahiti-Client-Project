import React from "react";
import "./Booking.scss";
import SideNav from "../../components/SideNav/SideNav";
import AppointmentBookingForm from "../../components/Forms/AppointmentBookingForm/AppointmentBookingForm";

const Booking = () => {
  return (
    <div className="booking">
      <div className="booking__nav">
        <SideNav />
      </div>

      <div className="booking__main">
        <div className="booking__heading">
          <h1>Booking</h1>
        </div>
        <div className="booking__main--right">
          <AppointmentBookingForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;
