import React, { Component } from "react";
import Login from "../src/components/Login";
import Home from "../src/components/Home";
import fire from "./config/Fire";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
    console.log("Authenticating now!.");
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    return (
      <div className="main-page">{this.state.user ? <Home /> : <Login />}</div>
    );
  }
}
export default App;
