import React from "react";
import { Link } from "react-router-dom";
import "./HomepageCard.scss";
import Button from "../Button/Button";

const HompageCard = ({ title, link }) => {
  return (
    <div className="homepage-card">
      <h1 className="homepage-card__heading">{title}</h1>
      <Link to={link}>
        <Button name="Go" variant="yellowMid" />
      </Link>
    </div>
  );
};

export default HompageCard;
