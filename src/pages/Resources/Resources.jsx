import React from "react";
import "./Resources.scss";
import mockData from "../../assets/data/mockData";
import Table from "../../components/Table/Table";
import TableCard from "../../components/TableCard/TableCard";
import SideNav from "../../components/SideNav/SideNav";

const Resources = () => {
  const getData = mockData.staffData.map((staff, index) => {
    return (
      <>
        <h3 className="table-header" key={staff.staffNumber + index}>
          Staff 0{staff.staffNumber}
        </h3>
        {staff.resources.map((resource, index) => {
          return (
            <TableCard
              key={index}
              item1={resource.resourceName}
              item2={resource.quantity}
              item3={resource.constPerUnit}
              item4={resource.autoPurchase}
              item5={resource.autoPurchaseLevel}
            />
          );
        })}
      </>
    );
  });

  return (
    <div className="resources">
      <h1>This is a resources page</h1>

      <SideNav />
      <Table
        title={"Health Products"}
        column1={"Resource Name"}
        column2={"Quantity Remaining"}
        column3={"Cost per unit"}
        column4={"Auto-Purchase"}
        column5={"Auto-Purchase Level"}
      />
      {getData}
    </div>
  );
};

export default Resources;
