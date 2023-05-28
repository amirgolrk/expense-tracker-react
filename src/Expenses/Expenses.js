import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from './ExpenseFilter'
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import './Expenses.css'
const Expenses = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2021')
    const FilterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear) 
    }
    const filteredExpenses =props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear
    })
 return(
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterChange={FilterChangeHandler}/>
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
    </Card>
 )
}
export default Expenses