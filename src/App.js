import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer" ;
import LoginForm from "./Components/LoginForm";
class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header/>
      <Switch>
      <Route exact path="/loginForm">
  <LoginForm />
</Route>
      <Route path="/" component={Home} exact/>
      <Route path="/Products" component ={Products} exact/>
      <Route path="/Footer" component={Footer} exact/> 
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App

