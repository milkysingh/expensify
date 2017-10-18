import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link}from 'react-router-dom'

 const ExpenseListItem=({description,amount,createdAt,id})=>(
    <li>

    <Link to= {`/edit/${id}`}>  <p><strong>{description}</strong>-{amount},( {createdAt} )</p></Link>
      

      </li>
);

export default connect()(ExpenseListItem);
