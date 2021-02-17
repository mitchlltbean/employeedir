import React from "react";
import "./list.css";

function List(props) {
  return (
    <div className="table">
      <ul className="list">
        {props.results.map((results) => (
          <li className="listtwo" key={results.cell}>
            <img
              alt={results.title}
              className="img"
              src={results.picture.large}
            />
            <br></br>
            <span>
              {results.name.first} {results.name.last}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
