import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import Register from './components/Register'
import Navbar from "./components/Navbar";


ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <Navbar/>
    <Route path='/' exact component={App}></Route>
    <Route path='/details/:id' exact  component={MovieDetails}></Route>
    <Route path='/Register'  exact component={Register}></Route>
  </Router>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
