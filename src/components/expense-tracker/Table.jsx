import React, { useState } from "react";
import "./table.css";

const Table = ({ allExpense }) => {
  const totalAmount = allExpense.reduce((total, item) => {
    return total + Number(item.amount);
  }, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {allExpense.map((item) => (
            <tr>
              <td>{item.expense}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
          <tr>
            <td>Tamount</td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
