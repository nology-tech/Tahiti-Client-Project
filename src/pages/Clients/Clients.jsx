import React from "react";
import "./Clients.scss";
import Table from "../../components/Table/Table";
import mockData from "../../assets/data/mockData.js";
import TableCard from "../../components/TableCard/TableCard";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import MobileNavButton from "../../components/MobileNavButton/MobileNavButton";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";

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
      <div className="clients-container__mobile">
        <TopNav heading="Clients" />
        {mockData.clientData.map((client, index) => {
          return <MobileNavButton key={index} name={client.name} />;
        })}
        <MobileHomeButton />
      </div>
      <div className="clients-container__page">
        <SideNav />
        <TopNav heading="Clients" buttonTitle="+ Create" showButton={true} />
        <div className="clients-container__page--rightside">
          <Table
            title={"Clients List"}
            column1={"Client Name"}
            column2={"date of birth"}
            column3={"email address"}
            column4={"mobile number"}
            column5={"practitioner"}
          />
          <div className="client-wrap">{getClientsData}</div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
