import React from "react";
import "./Staff.scss";
import Table from "../../components/Table/Table";
import mockData from "../../assets/data/mockData";
import TableCard from "../../components/TableCard/TableCard";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import MobileNavButton from "../../components/MobileNavButton/MobileNavButton";

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
      <div className="staff-page__mobile">
        {mockData.staffData.map((staff, index) => {
          return <MobileNavButton key={index} name={staff.fullName} />;
        })}
      </div>
      <div className="staff-page__page">
        <TopNav heading="Staff" buttonTitle="+ Edit" showButton={true} />

        <SideNav />
        <div className="staff-page__page--rightside">
          <Table
            title={"Staff bookings"}
            column1={"Client name"}
            column2={"Email address"}
            column3={"Mobile number"}
            column4={"Booking date"}
            column5={"Booking time"}
          />
          <div className="staff-wrap">{getData}</div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
