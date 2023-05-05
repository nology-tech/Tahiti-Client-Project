import React from "react";
import "./Staff.scss";
import Table from "../../components/Table/Table";
import mockData from "../../assets/data/mockData";
import TableCard from "../../components/TableCard/TableCard";

const Staff = () => {
  const practitionerArr = mockData.bookingsData.map(
    (booking) => booking.practitioner
  );

  const uniquePractitioner = practitionerArr.filter(
    (prac, index) => practitionerArr.indexOf(prac) === index
  );

  const getClientBookingData = mockData.clientData.map((client) => {
    return client.bookings.map((booking) => {
      if (booking.practitioner.match(uniquePractitioner)) {
        return (
          <div>
            <h3>{uniquePractitioner}</h3>
            <TableCard
              item1={client.name}
              item2={client.email}
              item3={client.mobileNumber}
              item4={booking.bookingId}
              item5={booking.bookingTime}
            />
          </div>
        );
      } else {
        return;
      }
    });
  });
  console.log(practitionerArr);
  console.log(uniquePractitioner);
  // <div key={index}>
  //   <h3 key={index} className="table-header">
  //     {booking.bookingId.practitioner}
  //   </h3>
  //   {mockData.clientData.map((client, index) => {
  //     return (
  //       <TableCard
  //         key={index}
  //         item1={client.name}
  //         item2={client.email}
  //         item3={client.mobileNumber}
  //         item4={booking.bookingId}
  //         item5={booking.bookingTime}
  //       />
  //     );
  //   })}
  // </div>

  // const getData = mockData.clientData.map((client) => {

  //   return client.bookings.map((booking, index) => {
  //     return (
  //       <div key={index}>
  //         <h3 className="table-header" key={index}>
  //           {booking.practitioner}
  //         </h3>

  //         <TableCard
  //           key={index + 1}
  //           item1={client.name}
  //           item2={client.email}
  //           item3={client.mobileNumber}
  //           item4={booking.bookingDate}
  //           item5={booking.bookingTime}
  //         />
  //       </div>
  //     );
  //   });
  // });

  return (
    <div className="staff-page">
      <div>
        <Table
          title={"Staff bookings"}
          column1={"Client name"}
          column2={"Email address"}
          column3={"Mobile number"}
          column4={"Booking date"}
          column5={"Booking time"}
        />
      </div>
      {getClientBookingData}
    </div>
  );
};

export default Staff;
