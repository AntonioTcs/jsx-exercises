import React from "react";
import ReactDOM from "react-dom";

const a = 10;
const b = 11;

function sum(a, b) {
  return <h2>{a + b}</h2>;
}

const total = sum(a, b);

ReactDOM.render(total, document.querySelector("#root"));
