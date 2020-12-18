import React, {useState, useEffect}from "react";
import {Route, Link, Switch} from "react-router-dom";
import * as yup from "yup";
import schema from "./validation/formSchema"

import axios from "axios";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import OrderDetails from "./components/Order";
import Styled from "styled-components"

const initialValues ={
  name: "",
  ///// DROPDOWN /////
  size: "",
   ///// RADIO BUTTONS /////
  sauce: "",
  ///// CHECKBOXES /////
  pepperoni: false,
  italianSauge: false,
  onions: false,
  extraCheese: false,
  substitute: false,
  ///TEXT//
  specialIns: "",
};

const initialErrors ={
  name: "",
  size: "",
  sauce: "",
  toppings: "",
  substitute: "",
  specialIns: "",
}

const initialOrders = [];

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [values, setValues] = useState(initialValues);
  const [errorValues, setErrorValues] = useState(initialErrors);

  const getOrders = () => {
    axios
    .get("http://localhost:3000")
    .then((res) => {
      setOrders(res.data);
    })
    .catch((err) => {
      console.log(err);
      debugger;
    })
  }

  const postNewOrder = (newOrder) => {
    axios
    .post("http://localhost:3000/OrdersDetails", newOrder)
    .then((res) => {
      setOrders([res.data, ...orders]);
      setValues(initialValues);
    })
    .catch((err) => {
      console.log(err);
      debugger;
    })
  }

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setErrorValues({...errorValues, [name]: "",})
   
    })  
    .catch((err) => {
      setErrorValues({...errorValues,[name]: err.errors[0]})
    })

    setValues({
      ...values,[name]: value,
    })
  }

  
    const Formsubmit = () => {
      const newOrder = {
          name: values.name.trim(),
          size: values.size.trim(),
          sauce: values.sauce.trim(),
          toppings: ["pepperoni", "italianSauge", "onions", "extraCheese"].filter((top) => values[top]),
          substitute: "",
          specialIns: values.specialIns.trim(),
      }
      
      postNewOrder(newOrder)
      console.log(newOrder)
  };

  useEffect(() => {
    getOrders();
  },[]);
   

  return (
    <AppContainer className = "App">
      <nav className="nav-container">
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/" className="homeLink">Home</Link>
          <Link to="/PizzaForm" className="formLink">Build your pizza</Link>
          <Link to="/OrderDetails"></Link>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/PizzaForm" component={PizzaForm}>
          <PizzaForm 
          values={values}
          error={errorValues}
          submit={Formsubmit}
          change={inputChange}
          />
        </Route>
        <Route path="/OrderDetails" component={OrderDetails}>
          <OrderDetails
          />
        </Route>
      </Switch>
    </AppContainer>
  );
};
export default App;


const AppContainer = Styled.div`
  .nav-container {
    display: flex;
    flex-direction: row;
  }

  .nav-links {
    border: solid black;
    width: 90%
    display: flex;
    justify-content: space-evenly;
  }

`