import React from "react";
import { Link } from "react-router-dom";
import "./HomepageCard.scss";

const HompageCard = ({ title, link }) => {
  return (
    <div className="homepage">
      <h1 className="homepage__heading">{title}</h1>
      <Link to={link}>
        <button className="homepage__button">Go</button>
      </Link>
    </div>
  );
};

export default HompageCard;
