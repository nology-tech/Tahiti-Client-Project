import React from "react";
import "./Booking.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from '../../components/TopNav/TopNav'

const Booking = () => {
  return (
    <div>
      <TopNav heading ="Book Appointment" buttonTitle ="+ Edit" showButton={false}/>
      <SideNav/>
    </div>
  )
};

export default Booking;
