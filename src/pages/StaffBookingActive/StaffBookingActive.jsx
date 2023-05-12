import React from "react";
import "./StaffBookingActive.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const StaffBookingActive = () => {
  return (
    <div>
      <TopNav heading ="Clients - Mark Mirchall" buttonTitle ="+ Edit" showButton={true}/>
      <SideNav />
    </div>
  );
};

export default StaffBookingActive;
