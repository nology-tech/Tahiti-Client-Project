import React from "react";
import "./AppointmentBookingForm.scss";
import mockData from "../../../assets/data/mockData.js";

const AppointmentBookingForm = () => {
  return (
    <div className="booking-form">
      <div className="booking-form__left">
        <label className="booking-form__left--label">First Name</label>
        <input className="booking-form__left--input" type="text" />
        <label className="booking-form__left--label">Last Name</label>
        <input className="booking-form__left--input" type="text" />
        <label className="booking-form__left--label">Email Address</label>
        <input className="booking-form__left--input" type="text" />
        <label className="booking-form__left--label">Mobile Number</label>
        <input className="booking-form__left--input" type="text" />
        <label className="booking-form__left--label">Staff Member</label>
        <select className="booking-form__left--select">
          {mockData.staffData.map((staff, index) => {
            return <option key={index}>{staff.fullName}</option>;
          })}
        </select>
        <div className="booking-form__left--buttons">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
      <div className="booking-form__right">
        <h3>Calendar goes here</h3>
        <label className="booking-form__right--label">Time:</label>
        <select className="booking-form__left--select">
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
