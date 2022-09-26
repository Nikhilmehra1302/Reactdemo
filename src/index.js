import "./styles.css";
/*(1) Importing react 1st way */
/*
let React = require("react");
let ReactDOM = require("react-dom");
*/
/* Importing react 2nd way*/

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const root = document.getElementById("root");
const apn = createRoot(root);

apn.render(<App />);
/* (3) with Javascript */
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
