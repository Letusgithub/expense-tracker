import React from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export default function Expense(props) {

    const [filterYear, setFilterYear] = React.useState('2020');

    function filterCheck(expense) {
        // console.log(expense.date.getFullYear());
        return (expense.date.getFullYear().toString() === filterYear);
    }
    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(filterCheck);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}