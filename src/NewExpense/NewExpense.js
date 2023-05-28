import React from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (item) => {
    console.log(item);
    const expenseData = {
      id: "e" + (Math.random() * 10).toFixed(2).toString(),
      ...item,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <Card className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};
export default NewExpense;
