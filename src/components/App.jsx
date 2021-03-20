import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  setInterval(updateTime, 1000); //calls updateTime every sec
  const [time, setTime] = useState(now); //'now' is the starting value
  // then it uses setTime fn to update the value of time

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
