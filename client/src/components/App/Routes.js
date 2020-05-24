// Routes.js
//import { withOAuth } from "aws-amplify-react";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderList from "../OrderList/OrderList";
import Tours from "../Tours/Tours";

class Routes extends Component {
  render() {
    return (
      <div className="Body-component-div">
        <Route path="/" exact component={OrderList} />
        <Route
          path="/orderdetails/:orderNumber"
          exact
          component={OrderDetails}
        />
        <Route path="/tours" exact component={Tours} />
      </div>
    );
  }
}

export default Routes;
