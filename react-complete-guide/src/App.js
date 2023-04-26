import React,{ useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

let INITIAL_EXPENSES=[
  { id:"e1", title: "House Rent", amount: 99.0, date: new Date(2023, 7, 29) },
  { id:"e2", title: "Grocery", amount: 20, date: new Date(2023, 7, 2) },
  { id:"e3", title: "School fees", amount: 125.5, date: new Date(2023, 4,18) },
]

function App() {
  // const expenses = [
  //   { id:"e1", title: "House Rent", amount: 99.0, date: new Date(2023, 7, 29) },
  //   { id:"e2", title: "Grocery", amount: 20, date: new Date(2023, 7, 2) },
  //   { id:"e3", title: "School fees", amount: 125.5, date: new Date(2023, 7818) },
  // ];
  const [expenses, setExpenses]=useState(INITIAL_EXPENSES);

  const addExpenseHandler=(expenseData)=>{
    // console.log("in app.js",expenseData);
    // setExpenses([expenseData,...expenses]);
    setExpenses((prevState)=>[expenseData,...prevState]);
  }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
