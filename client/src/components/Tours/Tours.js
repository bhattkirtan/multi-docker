import React, { Component } from "react";
import axios from "axios";

class Tours extends Component {
  state = {
    tourList: [],
    tourNumber: "",
  };

  componentDidMount() {
    //this.fetchTours();
  }

  async fetchTours() {
    const tourList = await axios.get("/api/tours/all");
    this.setState({
      tourList: tourList.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/getToursDetails", {
      index: this.state.tourNumber,
    });
    this.setState({ tourNumber: "" });
  };

  render() {
    return (
      <div>
        <h1>Tours View</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Tour Number:</label>
          <input
            value={this.state.tourNumber}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>
        <h3>Tours list will be displayed here...</h3>
      </div>
    );
  }
}

export default Tours;
