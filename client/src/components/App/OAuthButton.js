// OAuthButton.js
import { withOAuth } from "aws-amplify-react";
import React, { Component } from "react";

class OAuthButton extends Component {
  render() {
    return (
      <button className="OAuth-Button" onClick={this.props.OAuthSignIn}>
        Sign in
      </button>
    );
  }
}

export default withOAuth(OAuthButton);
