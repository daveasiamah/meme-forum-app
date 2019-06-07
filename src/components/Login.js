import React, { Component } from "react";
import fire from "../config/Fire";
import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  SignIn = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        alert("Sign In successful");
        console.log("Sign In Successful!");
      })
      .catch(err => {
        console.log(err.toString());
      });
  };
  SignUp = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        console.log("Sign Up Successfull!");
        alert("SignUp successful.");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="login-form">
          <h1>Login</h1>
          <div>
            <input id="email" type="email" placeholder="Email" />
          </div>
          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="sign-in" onClick={this.SignIn}>
            Sign In
          </div>
          <div className="sign-up" onClick={this.SignUp}>
            Sign Up
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
