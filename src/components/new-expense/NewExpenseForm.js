import React , {useState} from 'react'
import './expenceForm.css'

function NewExpenseForm(props) {

    // const [userInput , setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredDate: '',
    //     enteredPrice: ''
    // })

    const [enteredTitle , setEnteredTitle] = useState('')//setEnteredtitle={enteredTitle:''}

    const [enteredDate , setEnteredDate] = useState('')

    const [enteredPrice , setEnteredPrice] = useState('')
    
    const titleChangeHandler=(event)=>{
     setEnteredTitle(event.target.value)
    }//only update one input

    
    const dateChangeHandler=(event)=>{
       setEnteredDate(event.target.value)
    }

   
    const priceChangeHndler = (event) =>{
        setEnteredPrice(event.target.value)
    }

  
    const onsubmitHandler = (event)=>{
        event.preventDefault();
        const data = {
            data1 : enteredTitle,
            data2: new Date(enteredDate),
            data3 : enteredPrice
        }
        props.onSaveEnteredData(data)
        setEnteredPrice('');
        setEnteredTitle('');
        setEnteredDate('');// two binding method to both sending and storing imput values + value attribute
    }

    return (
        <form onSubmit={onsubmitHandler}>
            <div className="container">
                <div>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2020-11-08" max="2022-11-08" />
                </div>
                <div>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} min='0.01' step='0.01' />
                </div>

                <div>
                    <label>Price</label>
                    <input type='number' value={enteredPrice} onChange={priceChangeHndler} min='10' />
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}
export default NewExpenseForm