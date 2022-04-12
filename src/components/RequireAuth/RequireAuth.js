import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [rser] = useAuthState(auth)
    const location = useLocation()

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;