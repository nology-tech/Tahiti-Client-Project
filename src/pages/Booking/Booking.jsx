import React from "react";
import "./Booking.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";

const Booking = () => {
  return (
    <div className="booking-layout">
      <SideNav />
      <TopNav
        heading="Book Appointment"
        buttonTitle="+ Edit"
        showButton={false}
      />
      <MobileHomeButton />
    </div>
  );
};

export default Booking;
