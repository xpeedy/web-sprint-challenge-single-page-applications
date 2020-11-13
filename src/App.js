import React, {useState, useEffect}from "react";
import {Route, Link, Switch, Router} from "react-router-dom";

import axios from "axios";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import PizzaDetails from "./components/PizzaDetails";


// axios
//   .get("http://localhost:3000/")
//   .then((res) => {

//   })


const App = () => {
  
  

  return (
    <div className = "App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/PizzaForm">Build your pizza</Link>
          <Link to="/PizzaDetails"></Link>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/PizzaForm" component={PizzaForm}>
          <PizzaForm />
        </Route>
        <Route path="/PizzaDetails" component={PizzaDetails}>
          <PizzaDetails />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
