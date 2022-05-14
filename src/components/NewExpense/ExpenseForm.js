/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function (props) {
  // const [titleState, setTitleState] = useState('');
  // const [amountState, setAmountState] = useState('');
  // const [dateState, setDateState] = useState('');

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleTitleChange = function (ev) {
    const newTitle = ev.target.value;
    // Important: if function depends on previous state, pass in function when updating state
    // because React schedules state updates
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: newTitle,
      };
    });
  };

  const handleDateChange = function (ev) {
    const newDate = ev.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: new Date(newDate),
      };
    });
  };

  const handleAmountChange = function (ev) {
    const newAmount = ev.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: newAmount,
      };
    });
  };

  const handleFormSubmit = function (ev) {
    ev.preventDefault();
    const isEmpty = !(userInput.title && userInput.amount && userInput.date);
    if (isEmpty) return;

    props.onSaveExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            defaultValue={userInput.date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
