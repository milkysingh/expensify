import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Approute from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense,removeExpense,editExpense} from './actions/expenses';
import {setEndDate,setSortByAmount,setStartDate,setTextFilter,setSortByDate} from './actions/filter'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();
// console.log(store.getState());

store.dispatch(addExpense({
    description: "first Note",
    amount: 1500,
    createdAt:1000
}));

store.dispatch(addExpense({
    description: "Went for dinner",
    amount: 1000,
    createdAt:2000
}));
store.dispatch(addExpense({
    description: "Bought a controller",
    amount: 4200,
    createdAt:1200
}));


// store.dispatch(setTextFilter('no'));

// setTimeout(() => store.dispatch(setTextFilter('din')), 2000);
const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters)

 console.log(visibleExpense);
const jsx=(
    <Provider store={store}>
    <Approute />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
