import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const demoReducer= {
    expenses:[{
        id:"kjdboahof",
        description:"Bought glassess",
        note:"I bought these antiglare glasses for studying purpose",
        amount:999,
        createdAt:0
    }],
    filters:{
        text:"glassess",
        sortBy:"amount",//it could be date or amount
        startDate:undefined,
        endDate:undefined
    }
}


//Expenses Reducers

const addExpense = ({
    id = uuid(),
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id,
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates

});

const setTextFilter=(text='')=>({
    type:'TEXT_FILTER',
    text
});

const setSortByDate=()=>({
    type:'SORT_BY_DATE',
    sortBy:'date'
});

const setSortByAmount=()=>({
  type :'SORT_BY_AMOUNT',
  sortBy:'amount'
});

const setStartDate=(startDate)=>({
    type:'START_DATE',
    startDate
});

const setEndDate=(endDate)=>({
    type:'END_DATE',
   endDate
});



const expenseReducerDefaultState=[];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            {
                return [...state, action.expense]
            }
        case 'REMOVE_EXPENSE':
            {
                return state.filter(({
                    id
                }) => {
                    console.log(id+"  "+ action.id);
                    return id !== action.id})
            }
        case 'EDIT_EXPENSE':
            {
                return state.map((expense) => {
                    if (expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.updates
                        };
                    } else {
                        return expense;
                    }
                });
            }
        default:
            {
                return state;
            }
    }
}

//filter Reducer

const filterReducerDefaultState={
    text:'',
    sortBy:"date",//it could be date or amount
    startDate:undefined,
    endDate:undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case'TEXT_FILTER':{
            return {
                ...state,
                text:action.text
            }
        }
        case 'SORT_BY_DATE':{
            return{
                ...state,
                sortBy:action.sortBy
            }
        }
        case 'SORT_BY_AMOUNT': {
            return{
                ...state,
                sortBy:action.sortBy
            }
        }

        case 'START_DATE':{
            return {
                ...state,
                startDate:action.startDate
            }
        }

        case 'END_DATE':{
            return {
                ...state,
                endDate:action.endDate
            }
        }
        
        default: {
            return state;
        }
    }
}


const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state=store.getState();
  
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const getVisibleExpenses = (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    return expenses.filter((expense) => {
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if(sortBy==='amount') {
            console.log(a);
            return a.amount<b.amount?1:-1
        }
    })

}

const expenseOne = store.dispatch(addExpense({
    description: 'Bought a Controller',
    amount: 4200,
    createdAt:1000
}));
const expenseTwo = store.dispatch(addExpense({
    description: 'Shopping clothes',
    amount: 4500,
    createdAt:1500
}));
// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:5000}));

//  store.dispatch(setTextFilter('contro'));
//  store.dispatch(setSortByDate());
//  store.dispatch(setSortByAmount());
// store.dispatch(setSortByAmount());
store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(setStartDate(922));
// store.dispatch(setEndDate(9999));