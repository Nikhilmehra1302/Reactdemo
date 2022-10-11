import react, { useState } from "react";
import { Inputt } from "./RenderingConditions";
function localTime() {
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = react.useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Update</button>
    </div>
  );
}
//export default localTime;

//Event Handling
function eventHandle() {
  const [headingText, setHeadingText] = react.useState("Hello");
  function handleClick() {
    setHeadingText("Submitted");
  }
  const { changeName, setChangeName } = react.useState("a");

  function handleChange(event) {
    console.log(event.target.value);
    setChangeName(event.target.value);
  }

  return (
    <div>
      <h1>
        {headingText}
        {changeName}
      </h1>
      <Inputt
        onChange={handleChange}
        type="text"
        typeHolder="Whats you name"
        value={changeName}
      />
      <Inputt onClick={handleClick} type="submit" />
    </div>
  );
}

export default eventHandle;
