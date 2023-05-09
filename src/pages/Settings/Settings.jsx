import React from "react";
import "./Settings.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const Settings = () => {
  return (
  <div>
    <TopNav heading ="Settings" buttonTitle ="+ Apply" showButton={true}/>
    <SideNav/> 
  </div>
  )
};

export default Settings;
