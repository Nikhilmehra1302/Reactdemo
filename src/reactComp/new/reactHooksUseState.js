import react, { useState } from "react";

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
export default localTime;
