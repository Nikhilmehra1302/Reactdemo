/*(1) Importing react 1st way */
/*
let React = require("react");
let ReactDOM = require("react-dom");
*/
/* Importing react 2nd way*/
import React from "react";
import ReactDOM from "react-dom";

var kDOt = "I can't Please Everybody\n -k Dot";
const root = document.getElementById("root");
ReactDOM.render(
  <>
    <h1>{kDOt}</h1>
  </>,
  root
);

/* (3) with Javsscript */
let h1 = document.createElement("h2");
h1.innerHTML = "Sleep";
root.appendChild(h1);

/*Best way to add React in js (4)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
