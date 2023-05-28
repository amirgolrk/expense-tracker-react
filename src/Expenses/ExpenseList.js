import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>no Items Found</h2>
}
  return (
      <ul className="expenses-list">
        {props.items.map((elem) => (
          <ExpenseItem
            key={elem.id}
            title={elem.title}
            amount={elem.amount}
            date={elem.date}
          />
        ))}
      </ul>
  );
}
export default ExpenseList;
