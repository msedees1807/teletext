import React from "react";
import "./App.css";
import "./components/clock";
import Clock from "./components/clock";
import ScoreCard from "./components/scorecard";

function App() {
  return (
    <div className="App">
      <div className={"topBar"} style={{ float: "right" }}>
        <div style={{ display: "inline-flex" }}>
          <p style={{ paddingRight: "10px" }}>CEEFAX 1 303 </p>
          <Clock />
        </div>
      </div>

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
      <h2 style={{ color: "#30d91e", fontSize: "20px", paddingTop: "10px" }}>
        PREMIERSHIP RESULTS/FIXTURES
      </h2>
      <div className={"scores"} style={{ display: "grid" }}>
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div>
    </div>
  );
}

export default App;
