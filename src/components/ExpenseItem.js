
import React , {useState} from 'react'
import ExpenseDate from './ItemComponents/ExpenseDate'
import './expenseItem.css'




const ExpenseItem = (props)=> {//child
    const css = {
        backGround: '#3a3a3a',
        fontSize : '3rem',
        flex : '1',
        margin: '1px',
        color: 'white'
        
}

//    const [element , setElement] = useState(props.title)
//    const onChangeHandler = ()=>{
//     setElement('updated');
//    }

   
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2 style={css}>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button >change</button>
        </div>
        )

}

export default ExpenseItem