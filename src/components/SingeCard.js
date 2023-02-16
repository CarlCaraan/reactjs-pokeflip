import React from "react";
import "./SingleCard.css";

function SingeCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        {/* front card */}
        <img
          src={require(`../../src/images/${card.src}`)}
          className="front w-full rounded shadow-lg"
          alt="front-card"
        />
        {/* back card */}
        <img
          src={require("../../src/images/back.png")}
          className="back w-full rounded shadow-lg"
          alt="back-card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingeCard;
