import React from "react";
import "./ClientActive.scss";
import SideNav from "../../components/SideNav/SideNav";
import ClientCard from "../../components/ClientCard/ClientCard";
import { Link } from "react-router-dom";
import mockData from "../../assets/data/mockData";

const ClientActive = () => {
  return (
    <div>
      <h1>ClientActive</h1>
      <SideNav />
      <Link to={`/clients-active/${mockData.client.id}`}>
        <ClientCard />
      </Link>
    </div>
  );
};

export default ClientActive;
