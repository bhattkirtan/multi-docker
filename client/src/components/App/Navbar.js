// NavBar.js
import { withOAuth } from "aws-amplify-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-div">
        <Link className="App-link" to="/">
          Order
        </Link>
        <Link className="App-link" to="/tours">
          Tours
        </Link>
      </div>
    );
  }
}

export default withOAuth(NavBar);
