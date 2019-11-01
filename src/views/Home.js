import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Meme from "../components/Meme";
import "../App.css";
import logoImg from "../logo.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null,
      user: {}
    };
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({ fileSelected: event.target.files[0] });
  };

  fileUploadHandler = () => {
    console.log(this.state.fileSelected);
    console.log("file uploaded...");
  };

  handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    this.props.history.push("/");
    console.log(localStorage.getItem("isLoggedIn"));
  };

  loggedInUser = JSON.parse(localStorage.getItem("isLoggedIn"));

  componentWillUnmount() {
    localStorage.removeItem("isLoggedIn");
  }

  render() {
    if (!this.loggedInUser) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <nav
          className="navbar navbar-light bg-light"
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center"
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "1.7rem",
              border: "1px solid #F6D114",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              backgroundColor: "#f6d114"
            }}
          >
            MF
          </p>
          <div className="form-inline">
            <button
              onClick={this.handleLogOut}
              className="btn btn-sm btn-secondary"
              style={{ marginRight: "25px" }}
            >
              Logout
            </button>
            <Link className="navbar-brand" to="#">
              <img
                src={this.loggedInUser.imageUrl}
                width="45"
                height="45"
                style={{
                  borderRadius: "50%"
                }}
                className="d-inline-block align-top"
                alt="avatar"
              />
              <br />
              <span style={{ fontSize: "11px" }}>{this.loggedInUser.name}</span>
            </Link>
          </div>
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "15px",
            height: "50px"
          }}
        >
          <button
            className="btn btn-light"
            data-toggle="modal"
            data-target="#addNewMeme"
            style={{
              width: "160px",
              height: "38px",
              backgroundColor: "#F6D114",
              color: "white"
            }}
          >
            Upload Meme
          </button>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="addNewMeme"
          // tabindex="-1"
          role="dialog"
          aria-labelledby="AddNewMeme"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ width: "500px", height: "500px" }}
            >
              <h5
                className="modal-title"
                id="AddNewMeme"
                style={{
                  textAlign: "center",
                  color: "#f6d114",
                  paddingTop: "20px"
                }}
              >
                New Meme
              </h5>
              <div
                className="modal-body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly"
                }}
              >
                <div className="container" style={{ display: "flex" }}>
                  <div className="row">
                    <div className="col-md-6 card">
                      <img
                        src={logoImg}
                        alt="preview"
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "center" }}>
                      <label for="fileUpload">
                        <span style={{ color: "#f6d114", fontSize: "1.2rem" }}>
                          New Image
                        </span>
                      </label>
                      <input
                        id="fileUpload"
                        type="file"
                        onClick={() => {
                          console.log("clicked upload");
                        }}
                        onChange={this.fileSelectedHandler}
                      />
                      <button onClick={this.fileUploadHandler}>Upload</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-12"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    <label for="memeCaption">
                      <strong>Meme Caption</strong>
                    </label>
                    <input
                      className="form-control form-control-plaintext "
                      id="memeCaption"
                      type="text"
                      style={{ border: "1px solid #f6d114" }}
                    />
                  </div>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px"
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                    style={{ backgroundColor: "#F6D114", color: "white" }}
                  >
                    Upload Meme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main page */}
        <div className="container">
          <Meme />
        </div>
      </div>
    );
  }
}
export default Home;
