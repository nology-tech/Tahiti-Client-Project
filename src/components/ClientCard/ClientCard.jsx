import "./ClientCard.scss";
import React from "react";
import ClientImage from "../../assets/data/mockClientData";

const ClientCard = ({ name }) => {
  return (
    <div className="client-card">
      <img className="client-card__img" src={ClientImage} alt="client-image" />
      <h1 className="client-card__name">{name}</h1>
      <a href="" className="client-card__title" to="">
        Edit Client
      </a>
    </div>
  );
};
export default ClientCard;
