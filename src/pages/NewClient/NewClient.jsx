import React from "react";
import "./NewClient.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const NewClient = () => {
  return (
  <div>
    <TopNav heading ="Add Client" buttonTitle ="Save" showButton={true}/>
    <SideNav/>
  </div>
  )
};

export default NewClient;
