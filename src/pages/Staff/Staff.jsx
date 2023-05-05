import React from "react";
import "./Staff.scss";
import Table from "../../components/Table/Table";
// import TableCard from "../../components/TableCard/TableCard";
import mockData from "../../assets/data/mockData";

const Staff = () => {
  const getData = mockData.bookingsData.map((booking, index) => {
    return booking.practitioner;
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
  });
  
  console.log(getData);

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
        {getData}
      </div>
    </div>
  );
};

export default Staff;
