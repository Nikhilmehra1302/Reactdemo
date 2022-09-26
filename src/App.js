import React from "react";
//Import and Export in react
import ListA from "./list";
import Foot, { Pi, Message } from "./footer";
import * as Footer from "./footer";
//
export default function App() {
  return (
    <>
      <div className="App">
        <ListA></ListA>
        {/*<Foot></Foot>*/}
        <Footer.default />

        <li>
          {/*<Pi></Pi>*/}
          <Footer.Pi />
        </li>
        <li>
          {/*<Message></Message>*/}
          <Footer.Message />
        </li>
      </div>
    </>
  );
}
