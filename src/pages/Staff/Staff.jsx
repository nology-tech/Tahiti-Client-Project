import React from "react";
import "./Staff.scss";
import SideNav from "../../components/SideNav/SideNav";
import Button from "../../components/Button/Button";

const Staff = () => {
  return (
    <>
      <div className="buttonPlusImage">
        <Button name="Edit" variant="yellowNarrow" image={true} />
      </div>
      <div>
        <h1>Staff</h1>
        <SideNav />
      </div>
    </>
  );
};

export default Staff;
