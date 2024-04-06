
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import PageHome from 'pages/PageHome/PageHome';
import PageBuild from './pages/PageBuild/PageBuild';
import PageSavedBuilds from './pages/PageSavedBuilds/PageSavedBuilds';
import PageSelection from './pages/PageSelection/PageSelection';
import PageSavedBuild from './pages/PageSavedBuild/PageSavedBuild';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PageLogin from './pages/PageLogin/PageLogin';
import PageRegistration from './pages/PageRegistration/PageRegistration';
import PageAllBuilds from './pages/PageAllBuilds/PageAllBuilds';
import PageAdminPanel from './pages/PageAdminPanel/PageAdminPanel';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/useRedux';
import { checkAuth } from './store/reducers/authReducer';
import AdminArticle from './components/AdminArticleItem/AdminArticle';
import AdminArticles from './components/AdminArticles/AdminArtciles';



function App()  {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
}, [])

  return (
    <>
        <Routes>  
                <Route path="/login" element={<PageLogin/>}/>
                <Route path="/registration" element={<PageRegistration/>}/>
                <Route index element={<PageHome/>} />
                <Route element={<PrivateRoute />}>
                  <Route path="/build" element={<PageBuild/>} />
                  <Route path="/all-builds" element={<PageAllBuilds/>}/>
                  <Route path="/all-builds/:id" element={<PageSavedBuild/>}/>
                  <Route path="/hardware/:hardware/page/:page" element={<PageSelection/>} />
                  <Route path="/saved-builds" element={<PageSavedBuilds/>}/>
                  <Route path="/saved-builds/:id" element={<PageSavedBuild/>}/>
                  <Route path="/admin" element={<PageAdminPanel><AdminArticles/></PageAdminPanel>}/>
                  <Route path="/admin/create" element={<PageAdminPanel><AdminArticle/></PageAdminPanel>}/>
                  <Route path="/admin/edit/:id" element={<PageAdminPanel><AdminArticle/></PageAdminPanel>}/>
                </Route>

                <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
    </>
  );
}

export default App;
