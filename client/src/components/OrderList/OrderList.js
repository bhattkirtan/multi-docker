import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class OrderList extends Component {
  state = {
    orderList: [],
    orderNumber: "",
  };

  componentDidMount() {
    //this.fetchOrders();
  }

  async fetchOrders() {
    const orderList = await axios.get("/api/orders/all");
    this.setState({
      orderList: orderList.data,
    });
  }

  render() {
    return (
      <div>
        <h1>Order View</h1>
        <label>Enter Order Number:</label>
        <input
          value={this.state.orderNumber}
          onChange={(event) =>
            this.setState({ orderNumber: event.target.value })
          }
        />
        <Link to={`/orderDetails/${this.state.orderNumber}`}>
          <button>Submit</button>
        </Link>
        <h3>Orders list will be displayed here...</h3>
      </div>
    );
  }
}

export default OrderList;
