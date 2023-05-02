import "./ClientCard.scss";
import React from "react";

const ClientCard = ({ name, image }) => {
  return (
    <div className="client-card">
      <img
        className="client-card__img"
        src={image}
        alt="client-image"
        name={name}
      />
      <h1 className="client-card__name">Client 01</h1>
      <h3 className="client-card__title">Edit Client</h3>
    </div>
  );
};

export default ClientCard;
