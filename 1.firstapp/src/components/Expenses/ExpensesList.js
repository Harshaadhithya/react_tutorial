import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList=(props)=>{
    if(props.items.length>0){
      return(
            <ul className="expenses-list">
                {props.items.map((singleexpense)=>
                     <ExpenseItem 
                        key={singleexpense.id} 
                        title={singleexpense.title}
                        amount={singleexpense.amount}
                        date={singleexpense.date}>
                     </ExpenseItem>)
                }
            </ul>
            ) 
    }
    
    else{
        return(
            <h2 className="expenses-list__fallback">No items Found.</h2>
        )
    }
}

export default ExpensesList;