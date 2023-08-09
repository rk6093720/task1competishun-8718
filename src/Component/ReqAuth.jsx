import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ReqAuth = ({children}) => {
    const auth = false;
    const location = useLocation();
    if(!auth){
        return <Navigate to="/login" replace state={{data:location.pathname}}/>
    }
  return children;
}

export default ReqAuth