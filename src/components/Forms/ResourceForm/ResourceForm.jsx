import React from "react";
import Button from "../../Button/Button";
import "./ResourceForm.scss";

const ResourceForm = () => {
  return (
    <div className="resource-form-container">
      <div className="resource-form">
        <label className="resource-form__label">Quantity Remaining:</label>
        <input className="resource-form__input" />
        <label className="resource-form__label">Cost per Unit</label>
        <input className="resource-form__input" />
        <label className="resource-form__label">Auto-Purchase</label>
        <div className="resource-form__radio-buttons">
          <label className="resource-form__radio-buttons--label">Yes</label>
          <input
            className="resource-form__radio-buttons--button"
            type="radio"
          />
          <label className="resource-form__radio-buttons--label">No</label>
          <input
            className="resource-form__radio-buttons--button"
            type="radio"
          />
        </div>
        <label className="resource-form__label">Auto-Purchase Level</label>
        <input className="resource-form__input" />
      </div>
      <div className="mobile-save-btn">
        <Button name="Save" image={false} variant="yellowWide" />
      </div>

      <div className="resource-form-desktop">
        <div className="resource-form-desktop__left">
          <label className="resource-form-desktop__left--label">
            Category Name
          </label>
          <select className="resource-form-desktop__left--select">
            <option></option>
          </select>
          <label className="resource-form-desktop__left--label">
            Staff Member
          </label>
          <input className="resource-form-desktop__left--input" />
          <label className="resource-form-desktop__left--label">
            Resource Name
          </label>
          <input className="resource-form-desktop__left--input" />
        </div>

        <div className="resource-form-desktop__right">
          <label className="resource-form-desktop__right--label">
            Auto-Purchase
          </label>
          <div className="resource-form-desktop__right--radio-buttons">
            <label className="radio-buttons-label">Yes</label>
            <input className="radio-buttons-input" type="radio" />
            <label className="radio-buttons-label">No</label>
            <input className="radio-buttons-input" type="radio" />
          </div>
          <label className="resource-form-desktop__right--label">
            Auto-Purchase Level
          </label>
          <input className="resource-form-desktop__right--input" />
          <div className="resource-form-desktop__right--button">
            <Button name="Save" image={false} variant="yellowMid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
