import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const filterYearChangeHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
    console.log(enteredYear);
  };
  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearChange={filterYearChangeHandler}
        selectedYear={selectedYear}
      />
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
