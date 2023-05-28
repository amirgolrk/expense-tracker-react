import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const expensesData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expensesData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
  return (
    <div>
      <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              placeholder="enter title"
              value={enteredTitle}
            />
            {/*here we used onChange insteadof onInput so we can use it for every input types*/}
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              placeholder="enter amount of money"
              type="number"
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              placeholder="enter date"
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
