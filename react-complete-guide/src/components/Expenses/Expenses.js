import React,{useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [FilteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler=(year)=>{
    setFilteredYear(year);
  }

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={FilteredYear} onFilterChange={filterChangeHandler} ></ExpenseFilter>
        {
        // [<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />,
        //  <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />,
        //  <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} /> ]
         }
         
         {props.items.map((expense)=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
         
        
      </Card>
    </div>
  );
}

export default Expenses;
