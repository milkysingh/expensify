import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Welcome</h1>
        <p>{props.name}</p>
    </div>
);

const requiredAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
     {props.isLogged?<WrappedComponent {...props}/>:<p>Log in plzz..</p>}
     

    
    </div>
    );
}
const Auth=requiredAuthentication(Info);

ReactDOM.render(<Auth isLogged={true} name={"malkeet"}/>,document.getElementById('app'))