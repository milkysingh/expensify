import {createStore} from 'redux';

const incrementCount=({incrementBy=1}={})=>({ 
        type:'INCREMENT',
        incrementBy
    });

    const decrementCount=({decrementBy=1}={})=>({
        type:"DECREMENT",
        decrementBy
    });


    const resetCount=()=>({
        type:'RESET'
    });

    const setCount=({set})=>({
        type:"SET",
        set
    });

    const reduceCounter=(state = { count: 0}, action) => {
        
            switch (action.type) {
                case 'INCREMENT':
                    {
                        return {
                            count: state.count + action.incrementBy
                        };
                    }
                case 'DECREMENT':
                    {        
                        return {
                            count: state.count - action.decrementBy
                        };
                    }
                case 'RESET':
                    {
                        return {
                            count: 0
                        };
                    }
        
                case 'SET':
                    {
                        return {
                            count: action.set
                        }
                    }
                case 'default':
                    {
                        return state;
                    }
            }
        
            return state;
        }


    
const store = createStore(reduceCounter);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({
    incrementBy: 5
}));

store.dispatch(decrementCount({
    decrementBy: 10
}));

store.dispatch(resetCount());

store.dispatch(setCount({
    set: 100
}));

// store.dispatch(
//     {
//         type:'DECREMENT',
//         decrementBy:10
//     }
// );