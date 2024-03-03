
import { Route, Routes } from 'react-router-dom';

import PageHome from './pages/PageHome/PageHome';
import PageBuild from './pages/PageBuild/PageBuild';

import Root from './pages/Root/Root';
import PageSavedBuilds from './pages/PageSavedBuilds/PageSavedBuilds';
import PageSelection from './pages/PageSelection/PageSelection';
import PageSavedBuild from './pages/PageSavedBuild/PageSavedBuild';



function App()  {



  return (
    <>
        <Routes>
          <Route path="/" element={<Root/>}>
                <Route index element={<PageHome/>} />
                <Route path="build" element={<PageBuild/>} />
                <Route path="saved-builds" element={<PageSavedBuilds/>}/>
                <Route path="saved-builds/:id" element={<PageSavedBuild/>}/>
                <Route path=":hardware/:id" element={<PageSelection/>} />
                <Route path="*" element={<>NOT FOUND</>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
