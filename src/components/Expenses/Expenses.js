import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterYearChangeHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
    console.log(enteredYear);
  };
  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={filterYearChangeHandler}
          selectedYear={selectedYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
