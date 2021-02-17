import React, { Component } from "react";
import API from "../utils/API";
import List from "./list.js";

export default class home extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.searchAPI();
  }

  searchAPI = () => {
    API.search()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(res);
      })

      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLO
        <br></br>
        <List results={this.state.results} />
      </div>
    );
  }
}
