import React from "react";

function scorecard(props) {

  const {homeTeam, awayTeam} = props.data;
  const homeScore = props.data.score.fullTime.homeTeam;
  const awayScore = props.data.score.fullTime.awayTeam;

  return (
    <div className="scoresGrid">
      <div style={{ color: "#27f9f9" }}>      
        {homeTeam.name.endsWith("FC") ? homeTeam.name.replace("FC", "") : homeTeam.name}</div>
      <div style={{ textAlign: "center" }}>
        {homeScore}
      </div>
      <div style={{ textAlign: "center" }}>-</div>
      <div style={{ textAlign: "center" }}>
       {awayScore}
      </div>
      <div style={{ color: "#27f9f9" }}>
      {awayTeam.name.endsWith("FC") ? awayTeam.name.replace("FC", "") : awayTeam.name}
      </div>

      {/* <div>
        <p>Cole 12, 42</p>
      </div>
      <div />
      <div />
      <div />
      <div>
        <p>Bergkamp 17</p>
        <p>Anelka 84</p>
      </div> */}
    </div>
  );
}

export default scorecard;
