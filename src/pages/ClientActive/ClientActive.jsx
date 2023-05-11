import React from "react";
import "./ClientActive.scss";
import SideNav from "../../components/SideNav/SideNav";
import ClientCard from "../../components/ClientCard/ClientCard";

const ClientActive = () => {
  return (
    <div>
      <h1>ClientActive</h1>
      <SideNav />
      <ClientCard/>
    </div>
  );
};

export default ClientActive;
