
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  BrowserRouter,
} from "react-router-dom";

import { initializeApp } from "firebase/app";
  
const firebaseConfig = {
  apiKey: "AIzaSyCoRAL8yciBmlSuH9KmQ0-kpUnyBwFWST0",
  authDomain: "pcpicker-354a6.firebaseapp.com",
  projectId: "pcpicker-354a6",
  storageBucket: "pcpicker-354a6.appspot.com",
  messagingSenderId: "548579529684",
  appId: "1:548579529684:web:7b6bf8eca869dadefc7c41",
  measurementId: "G-ZCQ31FXSCL"
};

initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
    <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
    </BrowserRouter>
);

