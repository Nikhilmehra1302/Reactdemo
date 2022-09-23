/*(1) Importing react 1st way */
/*
let React = require("react");
let ReactDOM = require("react-dom");
*/
/* Importing react 2nd way*/
import React from "react";
import ReactDOM from "react-dom";
const root = document.getElementById("root");

var kDOt = "I can't Please Everybody -k Dot.";
var cole = "Hardest shit out the South since slavery, nigga";
let currentYear = new Date();

ReactDOM.render(
  <>
    <div>
      <h1>{`${kDOt} ${cole}`}</h1>
      <h3>
        <br></br>
        <p>Copyright {currentYear.getFullYear()}</p>
      </h3>
    </div>
  </>,
  root
);

/* (3) with Javsscript */
let h1 = document.createElement("h1");
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
