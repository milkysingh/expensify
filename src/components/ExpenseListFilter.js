import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter}from '../actions/filter'
import {setSortByAmount,setSortByDate} from '../actions/filter'

const ExpenseListFilter=(props)=>(
    <div>
        <input
         type="text"
              value={props.filters.text}
              onChange={(e)=>{
              props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select
         value={props.filters.value}
         onChange={(e)=>{
            if(e.target.value==='Amount'){
                   props.dispatch(setSortByAmount());
            }
            else {
                props.dispatch(setSortByDate());
            }
        }}>
        <option value="Date">Date</option>
        <option value="Amount">Amount</option>
      </select>
    </div>
);
const mapStateToProps=(state)=>{
    return {
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilter);