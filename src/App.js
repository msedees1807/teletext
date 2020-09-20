import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={"titleContainer"}>
        <div className={"bbcTitle"}>
          <h1>B</h1>
        </div>
        <div className={"bbcTitle"}>
          <h1>B</h1>
        </div>
        <div className={"bbcTitle"}>
          <h1>C</h1>
        </div>
        <div className={"footballTitle"}>
          <h1 className={"BBCheader"} style={{ color: "#0efe05" }}>
            FOOTBALL
          </h1>
        </div>
      </div>
      <h2 style={{ color: "#30d91e" }}>PREMIERSHIP RESULTS/FIXTURES</h2>
      <h2 style={{ color: "#22d7cf" }}>CHARLTON</h2>
      <p>Robinson 16</p>
      <p>Parker 32</p>
      <p>Euell 61</p>
    </div>
  );
}

export default App;
