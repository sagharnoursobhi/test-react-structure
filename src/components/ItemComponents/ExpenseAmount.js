import React from 'react' 

function ExpenseAmount(props) {
    const amount = props.amount
    return(
        <p>
            ${amount}
        </p>
    )
}

export default ExpenseAmount