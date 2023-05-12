import React from "react";
import "./Resources.scss";
import mockData from "../../assets/data/mockData";
import Table from "../../components/Table/Table";
import TableCard from "../../components/TableCard/TableCard";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import MobileNavButton from "../../components/MobileNavButton/MobileNavButton";
import MobileHomeButton from "../../components/MobileHomeButton/MobileHomeButton";
import { useState } from "react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedObject = mockData.staffData.filter((resource) => {
    return resource.fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getData = searchedObject.map((staff, index) => {
    return (
      <>
        <h3 className="table-header" key={staff.fullName + index}>
          {staff.fullName}
        </h3>
        {staff.resources.map((resource, index) => {
          return (
            <TableCard
              className="table-card"
              key={index}
              item1={resource.resourceName}
              item2={resource.quantity}
              item3={resource.constPerUnit}
              item4={resource.autoPurchase}
              item5={resource.autoPurchaseLevel}
              link ="edit-resources"
            />
          );
        })}
      </>
    );
  });
  return (
    <div className="resources">
      <div className="resources__container">
        <TopNav heading="Resources" />
        {mockData.staffData.map((staff, index) => {
          return (
            <>
              <h3
                className="mobile-table-header"
                key={staff.staffNumber + index}
              >
                Staff 0{staff.staffNumber}
              </h3>
              {staff.resources.map((resource, index) => {
                return (
                  <MobileNavButton key={index} name={resource.resourceName} />
                );
              })}
            </>
          );
        })}
        <MobileHomeButton />
      </div>
      <div className="desktop__container">
        <SideNav />
        <TopNav heading="Resources" buttonTitle="+ Create" showButton={true} />
        <div className="desktop__container--right">
          <Table
            title={"Health Products"}
            column1={"Resource Name"}
            column2={"Quantity Remaining"}
            column3={"Cost per unit"}
            column4={"Auto-Purchase"}
            column5={"Auto-Purchase Level"}
            handleInput={handleInput}
            searchTerm={searchTerm}
          />
          <div className="data-wrap">{getData}</div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
