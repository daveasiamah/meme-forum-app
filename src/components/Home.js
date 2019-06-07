import React, { Component } from "react";
import fire from "../config/Fire";
import "../App.css";

class Home extends Component {
  SignOut = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <div>
          <h4>You are now Logged In</h4>
        </div>
        <div className="btn-sign-out" onClick={this.SignOut}>
          LogOut
        </div>
      </div>
    );
  }
}
export default Home;
