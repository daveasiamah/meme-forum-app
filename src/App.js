import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Home from "./views/Home";

import config from "./config/Fire";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    console.log(config);
    console.log(process.env.REACT_APP_DATABASE_URL);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
