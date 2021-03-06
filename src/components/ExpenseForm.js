import React,{Component} from 'react';
import moment from 'moment';
import "react-dates/initialize"; 
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
this.state={
    description:props.expense?props.expense.description:'',
    note:props.expense?props.expense.note:'',
    amount:props.expense?props.expense.amount.toString():'',
    createdAt:props.expense?moment(props.expense.createdAt):moment(),
    calenderFocused:false,
    error:''
}
    }     

  
    onDescriptionChange=(e)=>{
        const description= e.target.value;
        this.setState(()=>({
            description
        }));
    }
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({
            note
        }));
    }

    onAmountChange=(e)=>{

     const amount=e.target.value;
     if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(()=>({amount}));
     }
    }

    onDateChange=(createdAt)=>{
         this.setState(()=>({createdAt}));
    }

    onFocusChange=({focused})=>{
    this.setState(()=>({calenderFocused:focused}));
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.amount||!this.state.description){
            this.setState(()=>({error:'Please enter the description and amount to continue.'}));
        }
        else {
            this.setState(()=>({error:''}));
           this.props.onSubmit({
                description:this.state.description,
                note:this.state.note,
                amount:parseFloat(this.state.amount,10),
                createdAt:this.state.createdAt.valueOf()
            })
        }

    }
    render() {

        return (
            <div>
                {this.state.error&&<h2>{this.state.error}</h2>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    placeholder="Add a description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    
                    />

                    <input 
                    type="text"
                    placeholder="Add the amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />

                    <textarea
                     value={this.state.note}
                     onChange={this.onNoteChange}
                     placeholder="Add a note (optional)"
                     ></textarea>
                     <button>Add Expense</button>
                </form>
               
            </div>
        )
    }
}