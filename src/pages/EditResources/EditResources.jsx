import React from "react";
import "./EditResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import ResourceForm from "../../components/Forms/ResourceForm/ResourceForm";

const EditResources = () => {
  return (
    <div className="edit-resources">
      <SideNav />
      <div className="edit-resources__container">
        <h1>EditResources</h1>

        <ResourceForm />
      </div>
    </div>
  );
};

export default EditResources;
