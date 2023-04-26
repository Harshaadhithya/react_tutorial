import React,{useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/ExpenseForm/NewExpense';

const PredefinedExpenses=[
  {id:'e1',
  title:'Current Bill',
  amount:432,
  date:new Date(2022,5,23)},

  {id:'e2',
  title:'Gas Bill',
  amount:215,
  date:new Date(2022,3,28)},

  {id:'e3',
  title:'College Fees',
  amount:500,
  date:new Date(2021,3,3)},

  {id:'e4',
  title:'Fuel Expense',
  amount:200,
  date:new Date(2020,4,29)},
]

const App=()=> {
  const [expenses,setExpenses]=useState(PredefinedExpenses);

  const AddExpensehandler=(newExpenseData)=>{
      setExpenses((prevState)=>{
        return [newExpenseData,...prevState];
      });
  }
  
  return (
    
    <div>
      <NewExpense onAddExpense={AddExpensehandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
     
    </div>
  );
}

export default App;
