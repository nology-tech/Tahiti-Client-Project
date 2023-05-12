import React from "react";
import "./Settings.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import SettingsWidget from "../../components/SettingsWidget/SettingsWidget";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";

const Settings = () => {
  return (
    <>
      <div className="settings-layout">
        <SideNav />
        <TopNav heading="Settings" buttonTitle="+ Apply" showButton={true} />
        <SettingsWidget />
        <MobileHomeButton />
      </div>
      <div className="settings-layout--mobile">
        <SideNav />
        <TopNav heading="Settings" />
        <div className="settings-layout--body">
          <SettingsWidget />
        </div>
        <MobileHomeButton />
      </div>
    </>
  );
};

export default Settings;
