import "./ClientCard.scss";
import React from "react";

const ClientCard = ({ name, clientImage }) => {
  return (
    <div className="client-card">
      <img
        className="client-card__img"
        src={clientImage}
        alt="client-image"
      />
      <h1 className="client-card__name">{name}</h1>
      <h3 className="client-card__title">Edit Client</h3>
    </div>
  );
};

export default ClientCard;
