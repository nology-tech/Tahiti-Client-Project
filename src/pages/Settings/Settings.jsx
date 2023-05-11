import React from "react";
import "./Settings.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import SettingsWidget from "../../components/SettingsWidget/SettingsWidget";

const Settings = () => {
  return (
    <div>
      <TopNav heading="Settings" buttonTitle="+ Apply" showButton={true} />
      <SideNav />
      <SettingsWidget />
    </div>
  );
};

export default Settings;
