import React, { useState } from "react";
import Button from "../../Button/Button";
import "./ResourceForm.scss";
import mockData from "../../../assets/data/mockData";

const ResourceForm = () => {
  const [category, setCategory] = useState("Health");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [quantityRemaining, setQuantityRemaining] = useState("");
  const [staffMember, setStaffMember] = useState("Tom Tompson");
  const [resourceName, setResource] = useState("");
  const [autoPurchase, setAutoPurchase] = useState("No");
  const [autoPurchaseLevel, setAutoPurchaseLevel] = useState("");

  const handleSubmitDesktop = (event) => {
    event.preventDefault();
    const resourceData = {
      costPerUnit,
      quantityRemaining,
      category,
      staffMember,
      resourceName,
      autoPurchaseLevel,
      autoPurchase,
    };
    console.log(resourceData);
  };

  const handleSubmitMobile = (event) => {
    event.preventDefault();
    const resourceDataMobile = {
      costPerUnit,
      quantityRemaining,
      autoPurchaseLevel,
      autoPurchase,
    };
    console.log(resourceDataMobile);
  };

  const handleCostPerUnit = (event) => {
    setCostPerUnit(event.target.value);
  };

  const handleQuantityRemaining = (event) => {
    setQuantityRemaining(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleStaffMember = (event) => {
    setStaffMember(event.target.value);
  };

  const handleResourceName = (event) => {
    setResource(event.target.value);
  };

  const handleAutoPurchase = (event) => {
    setAutoPurchase(event.target.value);
  };

  const handleAutoPurchaseLevel = (event) => {
    setAutoPurchaseLevel(event.target.value);
  };

  return (
    <div className="resource-form-container">
      <div className="resource-form">
        <label className="resource-form__label">Quantity Remaining:</label>
        <input
          className="resource-form__input"
          type="text"
          value={quantityRemaining}
          onChange={handleQuantityRemaining}
        />
        <label className="resource-form__label">Cost per Unit</label>
        <input
          className="resource-form__input"
          value={costPerUnit}
          onChange={handleCostPerUnit}
        />

        <label className="resource-form__label">Auto-Purchase</label>
        <div className="resource-form__radio-buttons">
          <label className="resource-form__radio-buttons--label">Yes</label>
          <input
            className="resource-form__radio-buttons--button"
            type="radio"
            id="auto1"
            name="auto-purchase"
            value="yes"
            onChange={handleAutoPurchase}
          />
          <label className="resource-form__radio-buttons--label">No</label>
          <input
            className="resource-form__radio-buttons--button"
            type="radio"
            id="auto2"
            name="auto-purchase"
            value="no"
            onChange={handleAutoPurchase}
          />
        </div>
        <label className="resource-form__label">Auto-Purchase Level</label>
        <input
          className="resource-form__input"
          value={autoPurchaseLevel}
          onChange={handleAutoPurchaseLevel}
        />
      </div>
      <div className="mobile-save-btn">
        <Button
          name="Save"
          image={false}
          variant="yellowWide"
          onClick={handleSubmitMobile}
        />
      </div>

      <div className="resource-form-desktop">
        <div className="resource-form-desktop__left">
          <label className="resource-form-desktop__left--label" type="number">
            Category Name
          </label>
          <select
            className="resource-form-desktop__left--select"
            value={category}
            onChange={handleCategory}
          >
            <option>Health</option>
            <option>Admin</option>
          </select>

          <label className="resource-form-desktop__left--label" type="text">
            Staff Member
          </label>

          <select
            className="resource-form-desktop__left--select"
            value={staffMember}
            onChange={handleStaffMember}
          >
            {mockData.staffData.map((staff, index) => {
              return <option key={index}>{staff.fullName}</option>;
            })}
          </select>

          <label className="resource-form-desktop__left--label">
            Resource Name
          </label>

          <input
            className="resource-form-desktop__left--input"
            value={resourceName}
            onChange={handleResourceName}
          />
        </div>

        <div className="resource-form-desktop__right">
          <label className="resource-form-desktop__right--label">
            Auto-Purchase
          </label>
          <div className="resource-form-desktop__right--radio-buttons">
            <label className="radio-buttons-label">Yes</label>
            <input
              className="radio-buttons-input"
              type="radio"
              id="auto1"
              name="auto-purchase"
              value="Yes"
              onChange={handleAutoPurchase}
            />
            <label className="radio-buttons-label">No</label>
            <input
              className="radio-buttons-input"
              type="radio"
              id="auto2"
              name="auto-purchase"
              value="No"
              onChange={handleAutoPurchase}
            />
          </div>
          <label className="resource-form-desktop__right--label">
            Auto-Purchase Level
          </label>
          <input
            className="resource-form-desktop__right--input"
            value={autoPurchaseLevel}
            onChange={handleAutoPurchaseLevel}
          />

          <div className="resource-form-desktop__right--button">
            <Button
              name="Save"
              image={false}
              variant="yellowMid"
              onClick={handleSubmitDesktop}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
