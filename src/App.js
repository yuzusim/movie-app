import React from "react";

function Food({ favourite }) {
  return <h3>I like {favourite}</h3>;
}

function App() {
  return (
    <div>
      <h2>Hello!!!</h2>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
    </div>
  );
}

export default App;
