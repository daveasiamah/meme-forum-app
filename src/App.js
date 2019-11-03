import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "../src/components/Login";
import Home from "./views/Home";
import { base } from "./base";

// import config from "./config/Fire";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    this.userRef = base.syncState("user", {
      context: this,
      state: "user"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.userRef);
  }

  componentDidMount() {
    console.log(base);
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
          <Route exact path="/home" component={Home} />
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
                  You can also click this link to the main page.
                </div>
                <Link to="/">
                  <strong>Meme Forum</strong>
                </Link>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
