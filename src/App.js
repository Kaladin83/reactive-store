import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Home from "./components/Home";
import Categories from "./components/Categories";
import Sales from "./components/Sales";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ContextProvider from "./appContext";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
