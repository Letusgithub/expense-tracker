import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    const curr_date = new Date();

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // function titleChangeHandler(event) {
            // setEnteredTitle(event.target.value);
    // }
    // function amountChangeHandler(event) {
        // setEnteredAmount(event.target.value);
    // }
    // function dateChangeHandler(event) {
        // setEnteredDate(event.target.value);
    // }

    function inputChangeHandler(identifier, value) {
        if (identifier === 'title') {
            setEnteredTitle(value);
        }
        else if (identifier === 'amount') {
            setEnteredAmount(value);
        }
        else {
            setEnteredDate(value);
        }
    }
    function submitHandler(event) {
        // this will prevent default reloading of page on form submit
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            // amount: Number(enteredAmount),
            amount: +enteredAmount, // another way to change in number
            date: new Date(enteredDate),
        };

        // console.log(expenseData);
        props.onSaveExpenseDate(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={(event) => { 
                    inputChangeHandler('title', event.target.value) }}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={(event) => { 
                    inputChangeHandler('amount', event.target.value) }}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min='1/1/2023' max={curr_date} onChange={(event) => { 
                    inputChangeHandler('date', event.target.value) }}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
            {/* <button type='submit' onClick={this is not the best way(see form tag above for best way)}>Add Expense</button> */}
        </div>
    </form>;
}