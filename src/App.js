import React, {useState, useEffect}from "react";
import {Route, Link, Switch,} from "react-router-dom";
import * as yup from "yup";
import schema from "./validation/formSchema"

import axios from "axios";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import OrderDetails from "./components/Order";


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
    .get("http://localhost:3000/orders")
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
    .post("http://localhost:3000/orders", newOrder)
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
    <div className = "App">
      <nav>
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
        <Route path="/PizzaForm" component={OrderDetails}>
          <PizzaForm 
          values={values}
          error={errorValues}
          submit={Formsubmit}
          change={inputChange}
          />
        </Route>
        <Route path="/Orders" component={OrderDetails}>
          <OrderDetails
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
