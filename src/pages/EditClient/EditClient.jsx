import React from "react";
import "./EditClient.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const EditClient = () => {
  return (
    <div>
      <TopNav heading ="Edit Client" buttonTitle ="Save" showButton={true}/>
      <SideNav/>
    </div>
  )
};

export default EditClient;
