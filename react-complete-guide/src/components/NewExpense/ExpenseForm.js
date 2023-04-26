import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const[EnteredTitle,setEnteredTitle]=useState('');
  const[EnteredAmount,setEnteredAmount]=useState('');
  const[EnteredDate,setEnteredDate]=useState('');
  // const [userInputs,setUserInputs]=useState({ EnteredTitle: "",EnteredAmount: "",EnteredDate: "" });
  
  const titleChangeHandler = (event) => {
    console.log("on change executed");
    setEnteredTitle(event.target.value);
    // setUserInputs((prevState)=>{
    //   return {...prevState,EnteredTitle:event.target.value}
    // })
    // console.log(userInputs);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInputs((prevState)=>{
    //   return {...prevState,EnteredAmount:event.target.value}
    // })
    // console.log(userInputs);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInputs((prevState)=>{
    //   return {...prevState,EnteredDate:event.target.value}
    // })
    // console.log(userInputs);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const ExpensData={
      title:EnteredTitle,
      amount:EnteredAmount,
      date:new Date(EnteredDate)
    }
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    // console.log(ExpensData);
    props.onSaveExpenseData(ExpensData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={EnteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={EnteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
