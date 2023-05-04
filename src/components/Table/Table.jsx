import React from "react";
import "./Table.scss";
import hamburgerIcon from "../../assets/images/hamburger-icon.svg";
import gridIcon from "../../assets/images/grid-icon.svg";
import sortIcon from "../../assets/images/sort-icon.svg";
import filterIcon from "../../assets/images/filter-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";

const Table = ({
  column1,
  column2,
  column3,
  column4,
  column5,
  title,
  header,
}) => {
  return (
    <div>
      <div className="table-head-container">
        <div className="table-head-container__title">
          <h2 id="table-title">{title}</h2>
          <img src={hamburgerIcon} alt="hamburger icon" />
          <img src={gridIcon} alt="grid icon" />
        </div>
        <div className="table-head-container__sorting">
          <div className="table-head-container__sorting--searchbox">
            <input
              className="table-head-container__sorting--input"
              type="text"
            />
            <img
              className="table-head-container__sorting--search"
              src={searchIcon}
              alt="search icon"
            />
          </div>

          <div className="table-head-container__sorting--sort">
            <img src={sortIcon} alt="sort icon" />
            <p>Sort</p>
          </div>
          <div className="table-head-container__sorting--filter">
            <img src={filterIcon} alt="filter icon" />
            <p>Filter</p>
          </div>
        </div>
      </div>

      <h3 id="table-header">{header}</h3>
      <div className="table-container">
        <table>
          <tr>
            <th>{column1}</th>
            <th>{column2}</th>
            <th>{column3}</th>
            <th>{column4}</th>
            <th>{column5}</th>
          </tr>
          <tr className="first-row">
            <td className="first-row__first-column"> name1 </td>
            <td>DOB1 </td>
            <td>email1</td>
            <td className="first-row__bold-column">mobile number1</td>
            <td>practitioner1</td>
          </tr>
          <tr className="second-row">
            <td className="first-row__first-column"> name1 </td>
            <td>DOB1 </td>
            <td>email1</td>
            <td className="first-row__bold-column">mobile number1</td>
            <td>practitioner1</td>
          </tr>
          <tr className="third-row">
            <td className="first-row__first-column"> name1 </td>
            <td>DOB1 </td>
            <td>email1</td>
            <td className="first-row__bold-column">mobile number1</td>
            <td>practitioner1</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
