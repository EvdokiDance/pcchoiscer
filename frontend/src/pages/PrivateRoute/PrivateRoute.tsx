import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useRedux'
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useRedux';
import { checkAuth } from '../../store/reducers/authReducer';
import { history } from '../../helpers/history';
import useScript from '../../hooks/useScript';

type Props = {
    children?: JSX.Element
}

export default function PrivateRoute({children} : Props) {


   const isAuthInProgress = useAppSelector((state) => state.auth.isAuthInProgress);
   const isAuth = useAppSelector((state) => state.auth.isAuth);
   const location = useLocation();

    if (isAuthInProgress) {
        return <div>Checking auth...</div>
    }


  


    if (!isAuth) { 
        return <Navigate to={'/login'} state={{from: location.pathname}} replace/>
    }

  
    

    return <Outlet/>


}


