import React from "react";
import "./Table.scss";

const Table = ({ column1, column2, column3, column4, column5, title }) => {
  return (
    <div className="table">
      <h2>{title}</h2>
      <table>
        <tr>
          <th>{column1}</th>
          <th>{column2}</th>
          <th>{column3}</th>
          <th>{column4}</th>
          <th>{column5}</th>
        </tr>
        <tr className="first-row">
          <td> name1 </td>
          <td>DOB1 </td>
          <td>email1</td>
          <td>mobile number1</td>
          <td>practitioner1</td>
        </tr>
        <tr className="second-row">
          <td> name2 </td>
          <td>DOB2 </td>
          <td>email2</td>
          <td>mobile number2</td>
          <td>practitioner2</td>
        </tr>
        <tr className="third-row">
          <td> name3 </td>
          <td>DOB3 </td>
          <td>email3</td>
          <td>mobile number3</td>
          <td>practitioner3</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
