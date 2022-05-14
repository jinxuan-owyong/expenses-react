/* eslint-disable react/prop-types */
import React from "react";
import "./ExpensesList.css";
const ExpensesList = function (props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return <ul className="expenses-list">{props.items}</ul>;
};

export default ExpensesList;
