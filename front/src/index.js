import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "../src/containers/Main";
import Movie from "./containers/Movie";
import Movies from "./components/Movies";
import Login from "./components/Login";
import Register from "./components/Register";

import store from "./store";
import Navbar from "./components/Navbar";

 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div className="bg-dark">
      <Navbar/>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register}/>
        
      </div>
    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
