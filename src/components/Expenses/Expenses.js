import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021")

    const saveFilterDataHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        // console.log(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onSaveFilterData={saveFilterDataHandler}
            />
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;