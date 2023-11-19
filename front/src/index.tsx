import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './layout/Layout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestComp from './TestComp';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <React.StrictMode>
      <Layout>
        <App/>
      </Layout>
    </React.StrictMode>,
  },
  {
    path: "/test",
    element: <TestComp/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

