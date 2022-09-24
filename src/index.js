import "./styles.css";
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

let li4 =
  "https://comicsense.b-cdn.net/wp-content/uploads/2022/08/cosplay_comicsense.jpg";

let randomImage = "https://picsum.photos/200/300";

ReactDOM.render(
  <>
    <div>
      <h1 className="heading" spellCheck="false">{`${kDOt} ${cole}`}</h1>
      <h3>
        <br></br>
        <p contentEditable="true">Copyright {currentYear.getFullYear()}</p>
      </h3>
      <ul className="category">
        <li>
          <img
            alt="s"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/oversize_comicsense.jpg"
          />
        </li>
        <li>
          <img
            alt=""
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/winterwear_comicsense.jpg"
          />
        </li>
        <li>
          <img
            alt=""
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/mangaS_comicsense.jpg"
          />
        </li>

        <li>
          <img alt="" src={li4} />
        </li>
      </ul>

      <li>
        <img alt="" src={randomImage + "?grayscale"} />
      </li>
    </div>
  </>,
  root
);

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
