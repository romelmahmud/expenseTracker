import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const newExpensesHandler = (expenseFromData) => {
    const expenseData = {
      ...expenseFromData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);
  const formShowHandler = () => {
    setShowForm(true);
  };
  const formHiddenHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={formShowHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onNewExpensesFormData={newExpensesHandler}
          onFormShow={formHiddenHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;
