import React, { Component } from "react";
import API from "../utils/API";

export default class home extends Component {
  state = {
    results: [],
  };

  searchAPI = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return <div>HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLO</div>;
  }
}
