import React from "react";

//Import and Export in react
import ListA from "./reactComp/list";
//import Foot, { Pi, Message } from "./reactComp/footer";
import * as Footer from "./reactComp/footer";
//import Cards from "./reactComp/CardReactProps";
import Header from "./reactComp/Header";

/* Mapping DATA into Componets*/
import mapCard from "./reactComp/mappingDatatoComp";
import arr from "./reactComp/cardArr";
/* Mappin */
import Login from "./reactComp/new/RenderingConditions";
import EventHandle from "./reactComp/new/reactHooksUseState";

var isLoggedIn = false;

//react Hooks

export default function App() {
  return (
    <>
      <div className="App">
        <Header></Header>

        <ListA></ListA>

        {isLoggedIn === true ? <h1>Hello User</h1> : <Login />}
        <EventHandle />
        {/*<Cards></Cards>*/}
        {arr.map(mapCard)}

        {/*<Foot></Foot>*/}
        <Footer.default />

        <li>
          {/*<Pi></Pi>*
            /}
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
