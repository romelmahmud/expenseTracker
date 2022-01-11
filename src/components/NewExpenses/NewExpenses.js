import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const newExpensesHandler = (expenseFromData) => {
    const expenseData = {
      ...expenseFromData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpensesFormData={newExpensesHandler} />
    </div>
  );
};
export default NewExpenses;
