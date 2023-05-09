import React from "react";
import "./RequestResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav"

const RequestResources = () => {
  return (
  <div>
    <TopNav heading ="Request Resource" buttonTitle ="+ Edit" showButton={false}/>
    <SideNav/> 
  </div>
  )
};

export default RequestResources;
