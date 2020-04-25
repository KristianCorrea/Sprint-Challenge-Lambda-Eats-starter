import React from "react";
import {Route, NavLink} from "react-router-dom"
import Homepage from "./components/Homepage"
import PizzaForm from "./components/PizzaForm"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <h1 style={{width: '100%'}}>Lambda Eats</h1>
      <NavLink to="/"><p style={{width: "100%"}}>Home</p></NavLink>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/orderpizza">
        <PizzaForm />
      </Route>
      
    </div>
  );
};
export default App;