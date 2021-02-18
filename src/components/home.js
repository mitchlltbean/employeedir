import React, { Component } from "react";
import API from "../utils/API";
import List from "./list.js";
import Searchlist from "./search";

export default class home extends Component {
  state = {
    name: "",
    results: [],
    Filteredperson: [],
    search: "",
  };

  componentDidMount() {
    this.searchAPI();
  }

  searchAPI = () => {
    API.search()
      .then((res) => {
        this.setState({
          results: res.data.results,
          Filteredperson: res.data.results,
        });

        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  // array.sort(function(a, b){
  //   var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
  //   if (nameA < nameB) //sort string ascending
  //    return -1;
  //   if (nameA > nameB)
  //    return 1;
  //   return 0; //default return value (no sorting)
  //  });
  //TODO: get sort function working on all employees
  handleSortSubmit = (event) => {
    event.preventDefault();
    const sortres = this.state.Filteredperson;
    sortres.sort(function (a, b) {
      var nameA = a.name.last.toLowerCase(),
        nameB = b.name.last.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    this.setState(sortres);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      Filteredperson: this.state.results.filter((dog) => {
        console.log(dog.name.last, this.state.search, "!!!!!!!!!!!");
        return (
          dog.name.last.includes(this.state.search) ||
          dog.name.first.includes(this.state.search) ||
          dog.email.includes(this.state.search)
        );
      }),
    });
  };

  render() {
    return (
      <div className="homeDiv">
        <Searchlist
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleSortSubmit={this.handleSortSubmit}
        />
        <br></br>
        <List results={this.state.Filteredperson} />
      </div>
    );
  }
}
