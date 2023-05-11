import React from "react";
import "./Clients.scss";
import Table from "../../components/Table/Table";
import mockData from "../../assets/data/mockData.js";
import TableCard from "../../components/TableCard/TableCard";
import SideNav from "../../components/SideNav/SideNav";
import MobileNavButton from "../../components/MobileNavButton/MobileNavButton";
import { useState } from "react";

const Clients = () => {
  const [searchTerm, setSearchTerm]=useState("")

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }
  const searchedClient = mockData.clientData.filter((client)=> {
    return client.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  const getClientsData = searchedClient.map((client, index) => {
    return client.bookings.map((booking) => {
      return (
        <TableCard
          key={index}
          item1={client.name}
          item2={client.dateOfBirth}
          item3={client.email}
          item4={client.mobileNumber}
          item5={booking.practitioner}
        />
      );
    });
  });

  return (
    <div className="clients-container">
      <div className="clients-container__mobile">
        {mockData.clientData.map((client, index) => {
          return <MobileNavButton key={index} name={client.name} />;
        })}
      </div>
      <div className="clients-container__page">
        <SideNav />
        <div className="clients-container__page--rightside">
          <Table
            title= {"Clients List"}
            column1={"Client Name"}
            column2={"date of birth"}
            column3={"email address"}
            column4={"mobile number"}
            column5={"practitioner"}
            searchTerm={searchTerm} 
            handleInput={handleInput}
            searchedClient={searchedClient}
          />
          <div className="client-wrap">{getClientsData}</div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
