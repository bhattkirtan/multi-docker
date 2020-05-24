import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderDetails extends Component {
  state = {
    orderDetails: [],
    orderNumber: "",
    isLoading: true,
  };

  componentDidMount() {
    this.fetchOrderDetails(this.props.match.params.orderNumber);
  }

  async fetchOrderDetails(orderNumber) {
    //const values = await axios.get("/api/orderdetails/orderNumber");
    console.log("fetchOrderDetails ", orderNumber);
    this.setState({
      //values: values.data,
      orderNumber: orderNumber,
      isLoading: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <h1>Order Details</h1>
            <h3>Order Number: {this.state.orderNumber}</h3>
            <Link to={`/`}>
              <button>back</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default OrderDetails;
