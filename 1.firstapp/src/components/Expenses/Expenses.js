import React,{useState} from 'react';

import './Expenses.css';
import './ExpenseFilter';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import Chart from '../Charts/Chart';
const Expenses=(props)=> {
  const [filteredYear,setFilteredYear]=useState('2021');

  const changeFilterhandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={changeFilterhandler} selected={filteredYear} ></ExpenseFilter>
      <Chart expenses={filteredExpenses}></Chart>
      <ExpensesList items={filteredExpenses} ></ExpensesList>
    </Card>
  );
}

export default Expenses;