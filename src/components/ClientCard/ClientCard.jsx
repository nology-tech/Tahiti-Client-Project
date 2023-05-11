import "./ClientCard.scss";
import React from "react";
import { useParams } from "react-router-dom";
import mockData from "../../assets/data/mockData";

const ClientCard = ({ mockData }) => {
  const { id } = useParams();

  const currentClient = mockData.find((client) => (client.id = id));

  const { name, clientImage, email, dateOfBirth, mobileNumber } = currentClient;

  return (
    <div className="client-card">
      <img
        className="client-card__img"
        src={clientImage}
        alt="client-image"
      />
      <h1 className="client-card__name">{name}</h1>
      <a href="" className="client-card__title" to="">
        Edit Enrollment
      </a>
    </div>
  );
};
export default ClientCard;
