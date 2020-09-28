import React from "react";

function scorecard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 25px 25px 25px auto",
        paddingBottom: "35px",
      }}
    >
      {this.props.matches.map((x) => (
        <div>
          <p>{x.homeTeam.name}</p>
          <p>{x.awayTeam.name}</p>
          <p>{x.score.fullTime.homeTeam}</p>
          <p>{x.score.fullTime.awayTeam}</p>
        </div>
      ))}

      <div style={{ color: "#27f9f9" }}>TEST</div>
      <div>4</div>
      <div>-</div>
      <div>3</div>
      <div style={{ color: "#27f9f9" }}>ARSENAL</div>

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
