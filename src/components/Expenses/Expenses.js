/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = function (props) {
  const processExpenses = function (exp) {
    return exp.map((e) => {
      return (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      );
    });
  };

  const [selectedYear, setSelectedYear] = useState("All");

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
  };

  const filterItemsByYear = function (year) {
    if (year === "All") return props.items;
    return props.items.filter(
      (expense) => expense.date.getFullYear() === +year
    );
  };

  const filteredExpenses = processExpenses(filterItemsByYear(selectedYear));
  
  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter onYearChange={handleYearChange} />
        <ExpensesList items={filteredExpenses}/>
      </div>
    </Card>
  );
};

export default Expenses;
