import React from "react";
import "./Clients.scss";
import Table from "../../components/Table/Table";

const Clients = () => {
  return (
    <div className="clients-container">
      Clients
      <Table
        title={"Clients List"}
        header={"Staff 01"}
        column1={"Client Name"}
        column2={"date of birth"}
        column3={"email address"}
        column4={"mobile number"}
        column5={"practitioner"}
      />
    </div>
  );
};

export default Clients;
