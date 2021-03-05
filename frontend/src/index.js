import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/app/index"
import { Provider } from 'react-redux'
import store from './state/store.js'
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Route path="/" component={App}/>
    </Provider>
  </BrowserRouter>,
  
  document.getElementById("root")
);
