import React from "react";
import "./Resources.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const Resources = () => {
  return (
  <div>
    <TopNav heading ="Resources" buttonTitle ="+ Create" showButton={true}/>
    <SideNav/> 
  </div>
  )
};

export default Resources;
