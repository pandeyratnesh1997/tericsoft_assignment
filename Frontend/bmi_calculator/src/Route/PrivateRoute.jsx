import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

let token  = localStorage.getItem("bmiAppToken");
if(!token){
    return <Navigate to={'/login'}/>
}
    return children

}

export default PrivateRoute