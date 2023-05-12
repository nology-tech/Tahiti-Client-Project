import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import "./EditResources.scss";
import SideNav from "../../components/SideNav/SideNav";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";
import ResourceForm from "../../components/Forms/ResourceForm/ResourceForm";

const EditResources = () => {
  return (
    <div className="edit-resources">
      <SideNav />
      <div className="edit-resources__container">
        <TopNav
          heading="Edit Resource"
          buttonTitle="+ Edit"
          showButton={false}
        />
        <ResourceForm className="edit-resources__container--form" />

        <MobileHomeButton />
      </div>
    </div>
  );
};

export default EditResources;
