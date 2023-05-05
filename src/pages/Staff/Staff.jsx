import React from "react";
import "./Staff.scss";
import Table from "../../components/Table/Table";
import mockData from "../../assets/data/mockData";
import TableCard from "../../components/TableCard/TableCard";
import SideNav from "../../components/SideNav/SideNav";

const Staff = () => {
  const getData = mockData.clientData.map((client) => {
    return client.bookings.map((booking, index) => {
      return (
        <div key={index}>
          <TableCard
            key={index + 1}
            item1={client.name}
            item2={client.email}
            item3={client.mobileNumber}
            item4={booking.bookingDate}
            item5={booking.bookingTime}
          />
        </div>
      );
    });
  });
  // A sorting functionality needed for filtering a clients for each member of staffs

  return (
    <div className="staff-page">
      <h2>This is staff page</h2>
      <div>
        <SideNav />
        <Table
          title={"Staff bookings"}
          column1={"Client name"}
          column2={"Email address"}
          column3={"Mobile number"}
          column4={"Booking date"}
          column5={"Booking time"}
        />
      </div>

      {getData}
    </div>
  );
};

export default Staff;
