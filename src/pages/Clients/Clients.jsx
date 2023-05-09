import React from "react";
import "./Clients.scss";
import SideNav from "../../components/SideNav/SideNav";
import Button from "../../components/Button/Button";

const Clients = () => {
  return (
    <>
      <div className="buttonPlusImage">
        <Button name="Create" variant="yellowNarrow" image={true} />
      </div>
      <div>
        <h1>Clients</h1>
        <SideNav />
      </div>
    </>
  );
};

export default Clients;
