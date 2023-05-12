import "./ClientCard.scss";
import React from "react";
import { useParams } from "react-router-dom";
import mockData from "../../assets/data/mockData";

const ClientCard = () => {

  const { clientId } = useParams();
  const currentClient = mockData.clientData.find((client) => (client.id == clientId));
  const { name, ClientImage, email, dateOfBirth, mobileNumber } = currentClient;

  return (
    <div className="cards">
      <div className="client-card">
        <img
          className="client-card__img"
          src={ClientImage}
          alt="client-image"
        />
        <h1 className="client-card__name">{name}</h1>
        <a href="" className="client-card__title" to="">
          Edit Enrollment
        </a>
      </div>
      <div className="client-card-info">
        <h1 className="client-card__contact">Contact Details</h1>
        <div className="client-card__details">
          <h2>Date of Birth:</h2>
          <p>{dateOfBirth}</p>
          <h2>Email Address:</h2>
          <p>{email}</p>
          <h2>Mobile Number:</h2>
          <p>{mobileNumber}</p>
        </div>
      </div>
      <div className="client-card-booking">
      </div>
    </div>
  );
};
export default ClientCard;
