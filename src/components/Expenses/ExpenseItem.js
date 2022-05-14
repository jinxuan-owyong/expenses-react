/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = function (props) {
  const { date, amount } = props;
  const [title, setTitle] = useState(props.title);

  const handleButtonClick = function () {
    setTitle("clicked");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={date} />
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleButtonClick}>Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
