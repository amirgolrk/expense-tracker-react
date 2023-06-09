import React from 'react';
import { useState } from 'react';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';
import Card from './UI/Card';
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (wooden)",
    amount: 666,
    date: new Date(2021, 5, 12),
  },

];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses]
    })
  }
  console.log(expenses);
  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </Card>
  );
}

export default App;
