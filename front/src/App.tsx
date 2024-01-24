
import { Link, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import cn from 'classnames'
import Layout from './layout/Layout';
import PageHome from './pages/pageHome/PageHome';
import PageBuild from './pages/pageBuild/PageBuild';
import PageSelection from './pages/pageSelection/PageSelection';
import Root from './pages/Root/Root';
import { useState, createContext } from 'react';





type PartType = {
  name: string,
  img: string,
  link: string,
  price?: string,
  features?: Object,
}

type BuildType = {
  [key : string] : PartType[]
}



type BuildContextType = {
  build: BuildType,
  addBuildComponent: () => void;
}



export const BuildContext = createContext<BuildContextType | null>(null);


function App()  {



  return (
    <>
        <Routes>
        <Route path="/" element={<Root/>}>
              <Route index element={<PageHome/>} />
              <Route path="build" element={<PageBuild/>} />
              <Route path=":hardware/:id" element={<PageSelection/>} />
              <Route path="*" element={<>NOT FOUND</>} />
        </Route>
        </Routes>
    </>
  );
}

export default App;
