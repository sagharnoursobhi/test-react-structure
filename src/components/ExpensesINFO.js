import React , {useState} from 'react' 
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
function ExpensesInfo() {//parent
    const expense = {
        padding: '1rem',
        backgroundColor: 'rgb(31, 31, 31)',
        margin: '2rem auto',
        width : '50rem',
        maxWidth : '95%',
        borderRadius:'12px',
        boxShadow: '0 1px 8px rgb(0, 0, 0, 0.25)'
    }
    const expenseINfo = [
        { id: 'e1', title: 'desk', amount: '34', date: new Date(2021, 5, 12) },
        { id: 'e2', title: 'book', amount: '14', date: new Date(2021, 1, 13) },
        { id: 'e3', title: 'purse',amount: '30', date: new Date(2021, 10, 14) },
        { id: 'e4', title: 'spoon', amount: '8', date: new Date(2021, 6, 15) }
    ]

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
                <ExpenseItem title={expenseINfo[0].title} id={expenseINfo[0].id} date={expenseINfo[0].date} amount={expenseINfo[0].amount} />
                <ExpenseItem title={expenseINfo[1].title} id={expenseINfo[1].id} date={expenseINfo[1].date} amount={expenseINfo[1].amount}/>
                <ExpenseItem title={expenseINfo[2].title} id={expenseINfo[2].id} date={expenseINfo[2].date} amount={expenseINfo[2].amount}/>
                <ExpenseItem title={expenseINfo[3].title} id={expenseINfo[3].id} date={expenseINfo[3].date} amount={expenseINfo[3].amount}/>
            </div>
        </div>
    )
}
export default ExpensesInfo