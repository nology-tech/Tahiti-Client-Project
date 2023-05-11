import React from "react";
import "./EditResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import ResourceForm from "../../components/Forms/ResourceForm/ResourceForm";

const EditResources = () => {
  return (
    <div className="edit-resources">
      <h1>EditResources</h1>
      <SideNav />
      <ResourceForm />
    </div>
  );
};

export default EditResources;
