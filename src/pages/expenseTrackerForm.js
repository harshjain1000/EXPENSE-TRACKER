import React, { useState } from 'react'
import { handleError } from '../utils';

function expenseTrackerForm({addexpenses}) {

    const [expenseInfo, setexpenseInfo] = useState({text: '', amount: ''});
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyexpenseInfo = { ...expenseInfo };
        copyexpenseInfo[name] = value;
        setexpenseInfo(copyexpenseInfo);
    }

    const handleExpense = (e) => {
        e.preventDefault();
        console.log(expenseInfo);
        const {text, amount } = expenseInfo;
        if(!text || !amount ){
            handleError('All fields are required');
            return;
        }
        setTimeout(() => {
        setexpenseInfo({text: '',amount: ''})
        },1000)
        addexpenses(expenseInfo)
    }
  return (
    <div className='container'>
            <h1>Expense Tracker</h1>
            <form onSubmit={handleexpense}>
                <div>
                    <label htmlFor='email'>Expense Description</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='text'
                        placeholder='Enter your expense description...'
                        value={expenseInfo.text}
                    />
                </div>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        onChange={handleChange}
                        type='number'
                        name='amount'
                        placeholder='Enter your Amount, expense(-ve) Income(+ve)...'
                        value={expenseInfo.amount}
                    />
                </div>
                <button type='submit'>Add expense</button>
                
            </form>
            
        </div>
  )
}

export default expenseTrackerForm