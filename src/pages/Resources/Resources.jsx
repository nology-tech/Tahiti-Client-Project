import React from "react";
import "./Resources.scss";
import SideNav from "../../components/SideNav/SideNav";
import Button from "../../components/Button/Button";

const Resources = () => {
  return (
    <>
      <div className="buttonPlusImage">
        <Button name="Create" variant="yellowNarrow" image={true} />
      </div>
      <div>
        <h1>Resources</h1>
        <SideNav />
      </div>
    </>
  );
};

export default Resources;
