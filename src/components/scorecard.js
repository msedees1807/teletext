import React from "react";

function scorecard(props) {
  console.log(props);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 25px 25px 25px auto",
        paddingBottom: "35px",
      }}
    >
      <div style={{ color: "#27f9f9" }}>{props.data.homeTeam.name}</div>
      <div>{props.data.score.fullTime.homeTeam}</div>
      <div>-</div>
      <div>{props.data.score.fullTime.awayTeam}</div>
      <div style={{ color: "#27f9f9" }}>{props.data.awayTeam.name}</div>

      <div>
        <p>Cole 12, 42</p>
        <p>Yorke 17, 63</p>
      </div>
      <div />
      <div />
      <div />
      <div>
        <p>Bergkamp 17</p>
        <p>Anelka 84, 87</p>
      </div>
    </div>
  );
}

export default scorecard;
