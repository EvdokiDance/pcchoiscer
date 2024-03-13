
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import PageHome from './pages/PageHome/PageHome';
import PageBuild from './pages/PageBuild/PageBuild';

import Root from './pages/Root/Root';
import PageSavedBuilds from './pages/PageSavedBuilds/PageSavedBuilds';
import PageSelection from './pages/PageSelection/PageSelection';
import PageSavedBuild from './pages/PageSavedBuild/PageSavedBuild';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PageLogin from './pages/PageLogin/PageLogin';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { useEffect } from 'react';
import { checkAuth } from './store/reducers/authReducer';
import { history } from './helpers/history';
import PageRegistration from './pages/PageRegistration/PageRegistration';
import PageAllBuilds from './pages/PageAllBuilds/PageAllBuilds';



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


function App()  {

  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const user = useAppSelector((state) => state.auth.user);



  


  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])




    useEffect(() => {
      
      if (isAuth) { 

        
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
        
      
        if (location.state?.from) {
          navigate(location.state.from, {replace: true});
        }
        

      } else {

        const script = document.querySelector('[data-id="clpk1eqwb0001l30f2f68701q"]');
        const chatUi = document.querySelector('#live-chat-ai-wrapper');

        
        if (script) {
          window.lc = {};
          document.head.removeChild(script);
          document.body.removeChild(chatUi);
        }
      
      }

      }, 
    [isAuth])





  return (
    <>
        <Routes>
          <Route path="/" element={<Root/>}>
                <Route path="/login" element={<PageLogin/>}/>
                <Route path="/registration" element={<PageRegistration/>}/>
                <Route index element={<PageHome/>} />
                <Route element={<PrivateRoute />}>
                  <Route path="build" element={<PageBuild/>} />
                  <Route path="all-builds" element={<PageAllBuilds/>}/>
                  <Route path="all-builds/:id" element={<PageSavedBuild/>}/>
                  <Route path="saved-builds" element={<PageSavedBuilds/>}/>
                  <Route path="saved-builds/:id" element={<PageSavedBuild/>}/>
                  <Route path=":hardware/:id" element={<PageSelection/>} />
                </Route>
          </Route>
                <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
    </>
  );
}

export default App;
