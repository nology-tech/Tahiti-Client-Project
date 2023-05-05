import React from "react";
import "./InfoCard.scss";

const InfoCard = ({InfocardObject}) => {

  return (
    <div className="infocard">
      <h1 className="infocard__heading">{InfocardObject.title}</h1>
      <p className="infocard__paragraph">{InfocardObject.paragraph}</p>
      <div className="infocard__items">
          <h2 className="infocard__subheading">{InfocardObject.headingOne}</h2>
          <p className="infocard__paragraph">{InfocardObject.headingDataOne}</p>
          <h2 className="infocard__subheading">{InfocardObject.headingTwo}</h2>
          <p className="infocard__paragraph">{InfocardObject.headingDataTwo}</p>
          <h2 className="infocard__subheading">{InfocardObject.headingThree}</h2>
          <p className="infocard__paragraph">{InfocardObject.headingDataThree}</p>
      </div>
    </div>
  );
};

export default InfoCard;
