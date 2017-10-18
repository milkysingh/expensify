import React from "react";
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpensesDashboardPage';
import AddExpenses from '../components/AddExpenses';
import EditExpenses from '../components/EditExpenses';
import HelpExpenses from '../components/HelpExpenses';
import NotFoungPage from '../components/NotFoundPage';
import Header from '../components/Header';
 
    
    const AppRoute=()=>(
        
       <BrowserRouter>
       <div>
            <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpenses}/>
        <Route path="/edit/:id" component={EditExpenses}/>
        <Route path="/help" component={HelpExpenses}/>
        <Route component={NotFoungPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    
    );
    export default AppRoute;