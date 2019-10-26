import React, { Component } from "react";
// import fire from "../config/Fire";
import "../App.css";
import GoogleLogin from "react-google-login";
import Dashboard from "./Dashboard";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      profileObj: {}
    };
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
  }

  responseGoogle = response => {
    const { profileObj } = response;

    if (this.state.user !== {}) {
      alert("Sign In Successfull!");
      this.setState(
        { profileObj: profileObj, user: profileObj.givenName },
        this.showDashboard
      );
    }
    console.log(response);
    console.log(this.state.user);
  };

  showDashboard = user => {
    return <Dashboard user={this.state.profileObj} />;
  };

  render() {
    return (
      <div className="App">
        <div
          className="container"
          style={{
            width: "400px",
            height: "500px",
            textAlign: "center",
            margin: "0 auto",
            border: "2px solid #dadada",
            borderRadius: "5px",
            padding: "40px",
            backgroundColor: "white"
          }}
        >
          <form className="form-group">
            <h1 className="heading">Meme Forum</h1>
            <h6 className="heading-sub">Home of the funniest Memes.</h6>
            <GoogleLogin
              clientId="657761939316-s66i73eqlof9h55avootuhato0tkdfg0.apps.googleusercontent.com"
              clientSecret="2mBb5QptZIu9ZwsdOnhyITGh"
              buttonText="Sign In With Google."
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
