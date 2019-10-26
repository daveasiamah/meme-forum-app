import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Dashboard from "./components/Dashboard";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="main-page">
        {this.state.user !== null ? <Dashboard /> : <Login />}
      </div>
    );
  }
}
export default App;
