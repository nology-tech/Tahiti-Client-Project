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

      <Button name="Save" image={false} variant="yellowWide" />
    </div>
  );
};

export default ResourceForm;
