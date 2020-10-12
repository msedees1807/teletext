import React from "react";
import "./App.css";
import "./components/clock";
import Clock from "./components/clock";
import ScoreCard from "./components/scorecard";
const axios = require("axios");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      matches: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.football-data.org/v2/competitions/PL/matches?status=FINISHED",
        {
          headers: { "X-Auth-Token": "602aec7271c543379a6c3f785e1df50f" },
        }
      )
      .then((response) => {
        const data = response.data.matches;
        this.setState({
          isLoaded: true,
          matches: data,
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    const { matches } = this.state;
    const matchList = matches.length ? (
      <div>
        {matches.slice(matches.length - 10, matches.length).map((data) => (
          <ScoreCard data={data} />
        ))}
      </div>
    ) : (
      <div>No Matches Shown</div>
    );

    return (
      <div className="App">
        <div className={"topBar"} style={{ float: "right" }}>
          <div style={{ display: "-webkit-inline-box", float: "right" }}>
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
          {matchList}
        </div>
      </div>
    );
  }
}
