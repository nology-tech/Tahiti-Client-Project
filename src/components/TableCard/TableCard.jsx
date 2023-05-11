import React from "react";
import { Link } from "react-router-dom";
import "./TableCard.scss";
import mockData from "../../assets/data/mockData";

const TableCard = ({ item1, item2, item3, item4, item5 }) => {
  return (
    <>
      <div className="data-row">
        <p className="data-row__item--first">{item1}</p>
        <p className="data-row__item">{item2}</p>
        <p className="data-row__item">{item3}</p>
        <p className="data-row__item--fourth">{item4}</p>
        <p className="data-row__item">{item5}</p>
        <Link to={`/client-active/${mockData.clientData.id}`}>
          <p className="right-arrow">&gt;</p>
        </Link>
      </div>
    </>
  );
};

export default TableCard;
