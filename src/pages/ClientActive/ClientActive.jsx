import React from "react";
import "./ClientActive.scss";
import SideNav from "../../components/SideNav/SideNav";
import ClientCard from "../../components/ClientCard/ClientCard";

const ClientActive = () => {
  return (
    <div className="clientActive">
      <SideNav />
      <div className="content">
        <h1 className="heading">Overview</h1>
        <ClientCard className="cards"/>
      </div>
    </div>
  );
};

export default ClientActive;
