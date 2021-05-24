import React , {useState} from 'react' 
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
const ExpensesInfo = (props)=> {//parent , child os app.js
    const expense = {
        padding: '1rem',
        backgroundColor: 'rgb(31, 31, 31)',
        margin: '2rem auto',
        width : '50rem',
        maxWidth : '95%',
        borderRadius:'12px',
        boxShadow: '0 1px 8px rgb(0, 0, 0, 0.25)'
    }
    const selectedYearHandler = (year)=>{
        console.log('year in Info is : ')
        console.log(year)
        setSelectedYear(year)
    }

    const [selectedYear , setSelectedYear] = useState('')

    return(
        <div>
            <ExpensesFilter thisYear={selectedYear} onChangeHandler={selectedYearHandler}/>
            <div className='expenses' style={expense}>
                {props.items.map(expenseItem=>
                    <ExpenseItem title={expenseItem.title}
                     amount={expenseItem.amount}
                      date={expenseItem.date}/>)}
            </div>

        </div>
    )
}
export default ExpensesInfo