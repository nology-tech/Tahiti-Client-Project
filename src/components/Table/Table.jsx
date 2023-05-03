import React from "react";
import "./Table.scss";

const Table = ({ column1, column2, column3, column4, column5, title }) => {
  return (
    <div>
        <h2>{title}</h2>
      <table>
        <tr>
          <th>{column1}</th>
          <th>{column2}</th>
          <th>{column3}</th>
          <th>{column4}</th>
          <th>{column5}</th>
        </tr>
        <tr>
          <td>Row 1, Column 1</td>
          <td>Row 1, Column 2</td>
          <td>Row 1, Column 3</td>
          <td>Row 1, Column 4</td>
          <td>Row 1, Column 5</td>
        </tr>
        <tr>
          <td>Row 2, Column 1</td>
          <td>Row 2, Column 2</td>
          <td>Row 2, Column 3</td>
          <td>Row 2, Column 4</td>
          <td>Row 2, Column 5</td>
        </tr>
        <tr>
          <td>Row 3, Column 1</td>
          <td>Row 3, Column 2</td>
          <td>Row 3, Column 3</td>
          <td>Row 3, Column 4</td>
          <td>Row 3, Column 5</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
