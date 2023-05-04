import React from "react";
import "./Resources.scss";
import mockData from "../../assets/data/mockData";
import Table from "../../components/Table/Table";
import TableCard from "../../components/TableCard/TableCard";

//mockData.staffData.forEach((staff) => {staff.resources.map((resource))}
const Resources = () => {
  const getResourcesData = mockData.staffData.map((staff) => {
    return staff.resources.map((resource, index) => {
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
    });
  });


  return (
    <div className="resources">
      <Table
        title={"Health Products"}
        header={"Staff 01"}
        data={mockData.staffData}
        column1={"Resource Name"}
        column2={"Quantity Remaining"}
        column3={"Cost per unit"}
        column4={"Auto-Purchase"}
        column5={"Auto-Purchase Level"}
      />
      {getResourcesData}
    </div>
  );
};

export default Resources;
