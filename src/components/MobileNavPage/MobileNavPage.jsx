import React from "react";
import "./MobileNavPage.scss";
import MobileNavButton from "../MobileNavButton/MobileNavButton";

const MobileNavPage = () => {
  return (
    <div className="MobileNav">
      <MobileNavButton name="New Booking" />
      <MobileNavButton name="Staff Details" />
      <MobileNavButton name="Client Details" />
      <MobileNavButton name="Resources" />
      <MobileNavButton name="Settings" />
    </div>
  );
};

export default MobileNavPage;
