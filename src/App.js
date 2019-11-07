import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "../src/components/Login";
import Home from "./views/Home";
// import Fire from "./config/Fire";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login {...props} user={user} />}
          />
          <Route
            exact
            path="/home"
            render={props => <Home {...props} user={user} />}
          />
          <Route
            path=""
            render={() => (
              <div className="container">
                <h1 className="heading1">Page cannot be found.</h1>
                <div className="lead">
                  Please navigate with your browser back button to the main
                  page.
                </div>
                <div className="secondary heading3">
                  You can also click this
                  <Link to="/">
                    <strong>Meme Forum</strong>
                  </Link>
                  link to the main page.
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
