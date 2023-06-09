import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

function ExpenseItem(props) {
    
    const [title, setTitle] = useState(props.title);
    const onClickHandler= () =>{
        setTitle("updated");
        console.log(title);
    }

    console.log("ExpenseItem Executed");
    
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}> 
        <p>hello</p>
      </ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={onClickHandler} >Click Me</button>
    </Card>
  );
}

export default ExpenseItem;
