import React from "react";
import "./Settings.scss";
import SideNav from "../../components/SideNav/SideNav";
import SettingsWidget from "../../components/SettingsWidget/SettingsWidget";

const Settings = () => {
  return (
  <div>
    <h1>Settings</h1>
    <SideNav/> 
    <SettingsWidget/>
  </div>
  )
};

export default Settings;
