import React from "react";
//Import and Export in react
import ListA from "./reactComp/list";
import Foot, { Pi, Message } from "./reactComp/footer";
import * as Footer from "./reactComp/footer";
import Header from "./reactComp/Header";
import Cards from "./reactComp/CardReactProps";

export default function App() {
  return (
    <>
      <div className="App">
        <Header></Header>

        <ListA></ListA>

        <Cards></Cards>

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
