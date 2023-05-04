import React from "react";
import { Link } from "react-router-dom";
import "./HomepageCard.scss";

const HompageCard = ({ title, link }) => {
  return (
    <div className="homepage-card">
      <h1 className="homepage-card__heading">{title}</h1>
      <Link to={link}>
        <button className="homepage-card__button">Go</button>
      </Link>
    </div>
  );
};

export default HompageCard;
