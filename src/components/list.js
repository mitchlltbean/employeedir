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
              <strong>
                {results.name.first} {results.name.last}
                <br></br>
                {results.email}
              </strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
