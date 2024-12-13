import React from 'react'

function expenseDetail({incomeAmt, expenseAmt }) {


  return (
    <div>
      <div>
        your Balance is{incomeAmt - expenseAmt}
      </div>

      <div className='amounts-container'>
        Income
        <span className='income-amount'>{incomeAmt}</span>

        Expense 
        <span className='expense-amount'>{expenseAmt}</span>

      </div>
    </div>
  )
}

export default expenseDetail