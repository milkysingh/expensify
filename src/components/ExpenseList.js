import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import selectorExpenses from '../selectors/expenses';

const ExpenseList =(props)=>(
    <div>
        
        <ol>
            {props.expenses.map((expense)=><ExpenseListItem key={expense.id} {...expense}/>)}
        </ol>

    </div>
);

const ConnectedExpenseList = connect((state)=>{
    return {
        expenses:selectorExpenses(state.expenses,state.filters)
    }
})(ExpenseList)

export default ConnectedExpenseList;