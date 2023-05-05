import React from "react";
import "./Clients.scss";
import Table from "../../components/Table/Table";
import mockData from "../../assets/data/mockData.js";
import TableCard from "../../components/TableCard/TableCard";

const Clients = () => {
  const getClientsData = mockData.clientData.map((client, index) => {
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
      This is the heading
      <Table
        title={"Clients List"}
        column1={"Client Name"}
        column2={"date of birth"}
        column3={"email address"}
        column4={"mobile number"}
        column5={"practitioner"}
      />
      {getClientsData}
    </div>
  );
};

export default Clients;
