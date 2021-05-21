import React from 'react'
import ExpensesInfo from './ExpensesINFO'
import NewExpense from './new-expense/NewExpense';

function App() {

    // const Expences = [
    //     { id: 'e1', title: 'desk', amount: '34', date: new Date(2021, 5, 12) },
    //     { id: 'e2', title: 'book', amount: '14', date: new Date(2021, 1, 13) },
    //     { id: 'e3', title: 'purse',amount: '30', date: new Date(2021, 10, 14) },
    //     { id: 'e4', title: 'spoon', amount: '8', date: new Date(2021, 6, 15) }
    // ]




    const onAddNewExpenseHandler = (expenseData) =>{
        console.log('In App.js')
        console.log(expenseData)
    }
    
    return (
        <>
            <NewExpense onAddNewExpense={onAddNewExpenseHandler}/>
            <ExpensesInfo/>
        </>
    )
}

export default App