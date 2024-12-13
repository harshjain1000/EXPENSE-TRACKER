 import React from 'react'
 
 function expensesTable({ expenses,handleDeleteExpense }) {
    console.log('expensesTable-->', expenses);
   return (
     <div className='expense-list'>
           {
               expenses?.map( (expense, index)=> (
                <div key={index} className='expense-item'>
                    <button className='delet-button'
                         onClick={() => handleDeleteExpense(expense._id)}
                    >X</button>
                    <div className='expense-description'>{expense.text}</div>
                    <div className='expense-amount'
                      style={{
                        color: expense.amount > 0 ? '#27ae60' : '#e74c3c'
                      }}
                    >
                        {expense.amount}
                    </div>
                </div>
               ))
           }
     </div>
   )
 }
 
 export default expensesTable