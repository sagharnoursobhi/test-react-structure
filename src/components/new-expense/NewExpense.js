import NewExpenseForm from "./NewExpenseForm"



 const NewExpense = (props)=>{
    const onSaveEnteredDataHandler = (enteredInputData)=>{
        const expenseData = {
        ...enteredInputData,
        id: Math.random().toString
        }
        props.onAddNewExpense(expenseData)
     }
    return(<div><NewExpenseForm onSaveEnteredData={onSaveEnteredDataHandler}/></div>)
 }

 export default NewExpense