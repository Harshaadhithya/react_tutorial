import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    const onSaveExpenseDataHandler=(ExpenseData)=>{
        // console.log(ExpenseData);
        let ExpenseData1={id:Math.random,...ExpenseData}
        props.onAddExpense(ExpenseData1);
    }

    return (
        <div className='new-expense' >
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} >

            </ExpenseForm>
        </div>
    )
}

export default NewExpense