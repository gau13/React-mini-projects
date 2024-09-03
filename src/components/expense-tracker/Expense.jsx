import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Expense = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [allExpense, setAllExpense] = useState([]);

  const handleSave = () => {
    const newExpense = {
      expense,
      amount,
    };
    setAllExpense([...allExpense, newExpense]);
    setExpense("");
    setAmount("");
  };

  return (
    <div>
      <Form
        expense={expense}
        setExpense={setExpense}
        amount={amount}
        setAmount={setAmount}
        allExpense={allExpense}
        handleSave={handleSave}
      />
      <Table allExpense={allExpense} />
    </div>
  );
};

export default Expense;
