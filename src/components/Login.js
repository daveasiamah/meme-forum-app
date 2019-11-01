import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  responseGoogle = response => {
    const { profileObj } = response;
    this.setState({ user: profileObj });

    if (this.state.user !== {}) {
      localStorage.setItem("isLoggedIn", JSON.stringify(this.state.user));
      this.props.history.push("/home");
    }
    console.log(response);
    console.log(this.state.user);
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f6d114",
          height: "100vh",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "100px"
        }}
      >
        <div
          className="card"
          style={{
            width: "400px",
            height: "400px",
            textAlign: "center",
            margin: "0 auto",
            backgroundColor: "white"
          }}
        >
          <form className="form-group">
            <h1 className="heading">Meme Forum</h1>
            <h6 className="heading-sub">Home of the funniest Memes.</h6>
            <GoogleLogin
              clientId="657761939316-s66i73eqlof9h55avootuhato0tkdfg0.apps.googleusercontent.com"
              clientSecret="2mBb5QptZIu9ZwsdOnhyITGh"
              buttonText="Sign in with Google."
              onSuccess={this.responseGoogle}
              onFailure={() => <Redirect to={"/"} />}
              fetchBasicProfile
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
