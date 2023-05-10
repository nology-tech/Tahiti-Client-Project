import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentBookingForm.scss";
import mockData from "../../../assets/data/mockData.js";
import Button from "../../Button/Button";

const AppointmentBookingForm = () => {
  const [date, onChange] = useState(new Date());

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [staffMember, setStaffMember] = useState("Tom Tompson");
  const [time, setTime] = useState("9:00");

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointmentData = {
      firstName,
      lastName,
      email,
      mobileNumber,
      staffMember,
      date,
      time,
    };
    console.log(appointmentData);
    handleCancel();
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setStaffMember("");
    setTime("9:00");
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleStaffMember = (event) => {
    setStaffMember(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="booking-form">
      <div className="booking-form__left">
        <label className="booking-form__left--label">First Name</label>
        <input
          className="booking-form__left--input"
          type="text"
          value={firstName}
          onChange={handleFirstName}
        />
        <label className="booking-form__left--label">Last Name</label>
        <input
          className="booking-form__left--input"
          type="text"
          value={lastName}
          onChange={handleLastName}
        />
        <label className="booking-form__left--label">Email Address</label>
        <input
          className="booking-form__left--input"
          type="text"
          value={email}
          onChange={handleEmail}
        />
        <label className="booking-form__left--label">Mobile Number</label>
        <input
          className="booking-form__left--input"
          type="text"
          value={mobileNumber}
          onChange={handleMobileNumber}
        />
        <label className="booking-form__left--label">Staff Member</label>
        <select
          className="booking-form__left--select"
          value={staffMember}
          onChange={handleStaffMember}
        >
          {mockData.staffData.map((staff, index) => {
            return <option key={index}>{staff.fullName}</option>;
          })}
        </select>
        <div className="booking-form__left--buttons">
          <Button name={"cancel"} variant="grayMid" onClick={handleCancel} />
          <Button name={"save"} variant="yellowMid" onClick={handleSubmit} />
        </div>
      </div>
      <div className="booking-form__right">
        <Calendar onChange={onChange} value={date} />

        {/* {console.log(value)}
        {console.log(staffMember)} */}
        <label className="booking-form__right--label">Time:</label>
        <select
          className="booking-form__right--select"
          value={time}
          onChange={handleTime}
        >
          <option>9:00</option>
          <option>9:30</option>
          <option>10:00</option>
          <option>10:30</option>
          <option>11:00</option>
          <option>11:30</option>
          <option>12:00</option>
          <option>12:30</option>
          <option>13:00</option>
          <option>13:30</option>
          <option>14:00</option>
          <option>14:30</option>
          <option>15:00</option>
          <option>15:30</option>
          <option>16:00</option>
          <option>16:30</option>
          <option>17:00</option>
        </select>
      </div>
    </div>
  );
};

export default AppointmentBookingForm;
