import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = function () {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

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

  const [filteredItems, setFilteredItems] = useState(processExpenses(expenses));
  const handleYearChange = function (year) {
    const filteredItems = expenses.filter(
      (expense) => expense.date.getFullYear() === +year
    );
    setFilteredItems(processExpenses(filteredItems));
  };

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter onYearChange={handleYearChange} />
        {filteredItems}
      </div>
    </Card>
  );
};

export default Expenses;
