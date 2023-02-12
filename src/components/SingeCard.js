import React from "react";

function SingeCard({ card }) {
  return (
    <div className="card">
      <div>
        {/* front card */}
        <img
          src={require(`../../src/images/${card}`)}
          className="w-full rounded-xl shadow-lg"
          alt="front-card"
        />
        {/* back card */}
        <img
          src={require("../../src/images/back.png")}
          className="w-full rounded-xl shadow-lg"
          alt="back-card"
        />
      </div>
    </div>
  );
}

export default SingeCard;
