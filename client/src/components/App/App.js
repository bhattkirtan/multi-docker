// App.js
import React, { Component } from "react";
import "./App.css";
import OAuthButton from "./OAuthButton";
import NavBar from "./Navbar";
import Routes from "./Routes";
import { Auth, Hub } from "aws-amplify";
import logo from "./Infosys_Technologies_logo.svg.png";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    if (localStorage.key("Auth")) {
      Auth.currentSession = localStorage.getItem("Auth");
    }
    // let the Hub module listen on Auth events
    Hub.listen("auth", (data) => {
      console.log("Hub listen- ", data);
      switch (data.payload.event) {
        case "signIn":
          console.log("signIn - ", data);
          this.setState({ authState: "signedIn", authData: data.payload.data });
          localStorage.setItem("Auth", data.payload.data);
          console.log("signIn Auth - ", Auth);
          break;
        case "signIn_failure":
          console.log("signIn_failure - ", data);
          this.setState({
            authState: "signIn",
            authData: null,
            authError: data.payload.data,
          });
          break;
        default:
          break;
      }
    });
    console.log("constructor", this.state, localStorage);
    this.state = {
      authState: "signedIn",
      authData: localStorage.getItem("authData"),
      authError: null,
    };
  }

  componentDidMount() {
    console.log("on component mount", Auth);
    // check the current user when the App component is loaded
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        this.setState({ authState: "signedIn" });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ authState: "signIn" });
      });
  }

  signOut() {
    console.log("signingout from here ");
    Auth.signOut()
      .then(() => {
        this.setState({ authState: "signIn" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { authState } = this.state;
    console.log("render - ", authState);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="OAuth-Button-div">
              {authState === "signIn" && <OAuthButton />}
            </div>
            <div className="OAuth-Button-div">
              {authState === "signedIn" && (
                <button className="OAuth-Button" onClick={this.signOut}>
                  Sign out
                </button>
              )}
            </div>
          </header>
          <div>
            {authState === "loading" && <div>loading...</div>}
            {authState === "signedIn" && (
              <div>
                <NavBar />
                <Routes />
              </div>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
