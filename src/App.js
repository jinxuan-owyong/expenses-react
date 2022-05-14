import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const handleAddExpense = function (expense) {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses />
    </div>
  );
}

export default App;
