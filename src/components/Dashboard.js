import React, { Component } from "react";

import "../App.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div>
          <h4>You are now Logged In as {this.props.profileObj}</h4>
        </div>
      </div>
    );
  }
}
export default Dashboard;
