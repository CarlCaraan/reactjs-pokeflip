import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import pokeballImage from "./images/pokeball.png";
import SingeCard from "./components/SingeCard";

const cardImage = [
  { src: "card1.jpg", matched: false },
  { src: "card2.jpg", matched: false },
  { src: "card3.jpg", matched: false },
  { src: "card4.jpg", matched: false },
  { src: "card5.jpg", matched: false },
  { src: "card6.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Card Click
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  // Handle a choice
  const handleChoice = (card) => {
    // console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        // console.log("those cards match");

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        // console.log("those cards do not match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset Choices and increase Turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      {/* Start Banner */}
      <Banner />
      {/* End Banner */}

      {/* Start Container */}
      <section className="content-section container mx-auto px-24 py-12">
        <div className="container bg-white rounded-[1.5px] px-12 py-6">
          {/* Instructions */}
          <div className="px-4 py-3 bg-[#f1f1f1]">
            <p>
              <span className="font-bold">Instructions:</span> Click on a card
              to activate it, and if the activation of two cards match, it will
              be considered as a point, but if the activation of two cards does
              not match, the cards will reset. You must complete the puzzle with
              less turn.
            </p>
          </div>
          {/* Button */}
          <button
            onClick={shuffleCards}
            className="py-2 px-4 bg-[#313131] text-white rounded mt-4 flex flex-row gap-2 items-center hover:opacity-90"
          >
            <img className="w-6" src={pokeballImage} alt={pokeballImage} />
            <span>Start Game</span>
          </button>

          {/* Start Card Grid */}
          <div className="grid grid-cols-6 gap-4 mt-4">
            {cards.map((card) => (
              <SingeCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
              />
            ))}
          </div>
          {/* End Card Grid */}
        </div>
      </section>
      {/* End Container */}
    </div>
  );
}

export default App;
