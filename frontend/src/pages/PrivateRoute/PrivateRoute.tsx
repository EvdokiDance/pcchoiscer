import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useRedux'
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useRedux';
import { checkAuth } from '../../store/reducers/authReducer';
import { Spinner } from '../../components';
import Layout from '../../layout/Layout';


interface IdentifyEventData {
    distinctId: string;
    email?: string;
    name?: string;
    phone?: string;
  }
  
  declare global {
    interface Window {
      lc: {
        identity?: IdentifyEventData;
        debug?: boolean;
      };
    }
  }


type Props = {
    children?: JSX.Element
}

export default function PrivateRoute({children} : Props) {

    const dispatch = useAppDispatch();

    const isAuthInProgress = useAppSelector((state) => state.auth.isAuthInProgress);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const user = useAppSelector((state) => state.auth.user);

   const location = useLocation();
   const navigate = useNavigate();


    



    useEffect(() => {
      
      if (isAuth) { 

        // AI CHAT
        const script = document.createElement('script');
        
        window.lc = window.lc || {};
        window.lc.debug = true;
        window.lc.identity = {
          distinctId: user.email,
          email: user.email,
        }

        script.src = "https://app.livechatai.com/embed.js";
        script.async = true;
        script.defer = true;
        script.dataset.id = 'clpk1eqwb0001l30f2f68701q';
        
        document.head.appendChild(script);
    

      }

      }, 
    [isAuth])



    if (isAuthInProgress) {
        return <Spinner/>
    }


  
    if (!isAuth && !isAuthInProgress) { 
        return <Navigate to={'/login'} state={{from: location.pathname}} replace/>
    }


    if (location.pathname.startsWith('/admin') && !isAuthInProgress && user.role !== 'ADMIN') {
     return <div>Доступ запрещен</div>
    }


   if (isAuth && !isAuthInProgress) {
    return <Layout><Outlet/></Layout>
   }


}


