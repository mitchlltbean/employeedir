import React from "react";
import "./search.css";

function Searchlist(props) {
  return (
    <form>
      <div className="form-group">
        <label ClassName="search" htmlFor="search">
          <p></p>
          Search:
        </label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="SEARCH BY FIRST or LAST NAME or EMAIL"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchlist;
