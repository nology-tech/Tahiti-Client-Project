import React from "react";
import "./EditResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const EditResources = () => {
  return (
  <div>
    <TopNav heading ="Edit Resource" buttonTitle ="+ Edit" showButton={false}/>
    <SideNav/>
  </div>
  )
};

export default EditResources;
