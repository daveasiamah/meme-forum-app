import React, { Component } from "react";
import grandMa from "../images/Grandma-Finds-The-Internet.jpg";
import "../App";

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="row">
          <div
            className="col-md-1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <span>
              <i className="vote fa fa-thumbs-up" aria-hidden="true"></i>
              <br />
              <span>23</span>
              <br />
              <i className="vote fa fa-thumbs-down" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-md-7">
            <img
              className="card"
              src={grandMa}
              alt="grandma"
              width="100%"
              height="350px"
            />
          </div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h2 style={{ color: "#F6D114" }}>What is a Meme?</h2>
            <p>120 comments</p>
            <p>
              <img
                src={grandMa}
                alt="userimage"
                style={{
                  width: "50px",
                  height: "50px",
                  //   padding: "10px",
                  borderRadius: "50%",
                  align: "left"
                }}
              />
              <span style={{ fontSize: "12px", padding: "0 10px 0" }}>
                Posted 3hrs ago
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Meme;
