import React from "react";

function List(props) {
  return (
    <ul className="list">
      {props.results.map((results) => (
        <li className="list" key={results.cell}>
          <img
            alt={results.title}
            className="img"
            src={results.picture.medium}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
