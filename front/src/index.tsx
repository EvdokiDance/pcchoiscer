import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './layout/Layout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Input from './components/Input/Input';
import PageSelection from './pages/PageSelection';


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
    path: "/selection",
    element: 
      <Layout>
        <PageSelection/>
      </Layout>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

