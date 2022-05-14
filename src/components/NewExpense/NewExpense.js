/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = function (props) {
  // Passing data upwards (from child to parent)
  // Lifting the state up
  const handleSaveExpenseData = function (data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  return (
    <div className="new-expense">
      {!showForm && <button onClick={handleShowForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleHideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
