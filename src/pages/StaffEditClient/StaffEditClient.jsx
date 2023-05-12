import React from "react";
import "./StaffEditClient.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const StaffEditClient = () => {
  return (
    <div>
      <TopNav heading ="Clients - Mark Mirchall" buttonTitle ="+ Edit" showButton={false}/>
      <SideNav />
    </div>
  );
};

export default StaffEditClient;
