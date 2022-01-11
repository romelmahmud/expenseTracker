import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
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

  const addNewExpenseHandler = (newExpenseData) => {
    console.log("from app.js");
    console.log(newExpenseData);
  };

  return (
    <div className="App">
      <NewExpenses onNewExpense={addNewExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
