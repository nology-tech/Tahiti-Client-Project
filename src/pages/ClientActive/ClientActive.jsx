import React from "react";
import "./ClientActive.scss";
import SideNav from "../../components/SideNav/SideNav";
import ClientCard from "../../components/ClientCard/ClientCard";
import TopNav from "../../components/TopNav/TopNav";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";

const ClientActive = () => {
  return (
    <div className="clientActive">
      <SideNav />
      <div className="main">
        <TopNav heading="Clients" buttonTitle="+ Edit" showButton={true} />
        <div className="content">
          <h1 className="heading">Overview</h1>
          <ClientCard className="cards" />
        </div>
        <MobileHomeButton className="homeButton" />
      </div>
    </div>
  );
};

export default ClientActive;
