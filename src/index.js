import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Navigate, Route, Router} from 'react-router-dom';
import './index.css';
// import
// import Start from './Start.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
// import Something from './Something';
// import Button from './Button';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import counterReducer from "./redux/counter"
import userslice from './redux/Userslice';
let store = configureStore({
  reducer: {counterReducer,
    userslice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
