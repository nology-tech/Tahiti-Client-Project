import React from "react";
import "./Settings.scss";
import SideNav from "../../components/SideNav/SideNav";
import Button from "../../components/Button/Button";

const Settings = () => {
  return (
    <>
      <div className="buttonPlusImage">
        <Button name="Apply" variant="yellowNarrow" image={true} />
      </div>
      <div>
        <h1>Settings</h1>
        <SideNav />
      </div>
    </>
  );
};

export default Settings;
