import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        //console.log(enteredExpenseData);
        const newExpenseData={
            id:Math.random().toString(),
            ...enteredExpenseData
            
        };
        props.onAddExpense(newExpenseData);
        setIsEditing(false);
    }

    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler} >Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={stopEditingHandler}>
                </ExpenseForm>   
            )}
        </div>  
    )
}

export default NewExpense;