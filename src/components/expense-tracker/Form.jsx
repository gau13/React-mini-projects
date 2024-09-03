import React from "react";

const Form = ({ handleSave, expense, setExpense, amount, setAmount }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "auto",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        Expense:
        <input
          type="text"
          value={expense}
          style={{ display: "flex" }}
          onChange={(e) => setExpense(e.target.value)}
        />
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button style={{ width: "50px", padding: "5px" }} onClick={handleSave}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
