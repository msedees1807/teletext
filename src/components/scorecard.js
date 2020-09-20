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
      <div style={{ color: "#27f9f9" }}>MAN UNITED</div>
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

      {/* 
      <h2 style={{ color: "#22d7cf" }}>CHARLTON</h2>
      <p>Robinson 16</p>
      <p>Parker 32</p>
      <p>Euell 61</p> */}
    </div>
  );
}

export default scorecard;
