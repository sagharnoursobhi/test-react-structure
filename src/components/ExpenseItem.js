
import React , {useState} from 'react'
import ExpenseDate from './ItemComponents/ExpenseDate'
import './expenseItem.css'
import ExpenseAmount from './ItemComponents/ExpenseAmount'




function ExpenseItem(props) {
    const css = {
        backGround: '#3a3a3a',
        fontSize : '3rem',
        flex : '1',
        margin: '1px',
        color: 'white'
        
}
    
   const [title , setTitle] = useState('updated')
   const functionHandler = (event)=>{
    setTitle(event.target.value);
   }

   
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2 style={css}>{title}</h2>
                <div className='expense-item__price'><ExpenseAmount amount={props.amount}/></div>
                <button onClick={functionHandler}>change</button>
            </div>
        </div>
        )

}

export default ExpenseItem