import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import "./EditResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import ResourceForm from "../../components/Forms/ResourceForm/ResourceForm";

const EditResources = () => {
  return (
    <div className="edit-resources">
    <TopNav heading ="Edit Resource" buttonTitle ="+ Edit" showButton={false}/>
      <SideNav />
      <div className="edit-resources__container">
        <h1>EditResources</h1>
        <ResourceForm className="edit-resources__container--form" />
      </div>
    </div>
  );

  };


export default EditResources;
