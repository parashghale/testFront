import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';

const PrivateRoute =({component:Component, ...rest})=>(
    <Route 
    {...rest}
    render={props=>
    localStorage.getItem("token" && "user")?(
<Component {...props} />
    ):(  toast("Unauthorized Access!!"),
        <Redirect to={{
            pathname:'/',
            state:{from:props.location}
        }}
        />
    )}
    />
);


export default PrivateRoute;