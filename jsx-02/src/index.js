import React from "react";
import ReactDOM from "react-dom";
const name = "Franco";

function helloName(name) {
  return <h1>Hello, {name}!</h1>;
}

const greets = helloName(name);

ReactDOM.render(greets, document.querySelector("#root"));
