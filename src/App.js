import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import pokeballImage from "./images/pokeball.png";
import SingeCard from "./components/SingeCard";
import Footer from "./components/Footer";

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

  const [disabled, setDisabled] = useState(false);

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  // Handle a choice
  const handleChoice = (card) => {
    // console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare 2 Selected Cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
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
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset Choices and increase Turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start a New Game Automatically
  useEffect(() => {
    shuffleCards();
  }, []);
  useEffect(() => {
    if (turns === 10) {
      shuffleCards();
    }
  }, [turns]);

  return (
    <div className="App">
      {/* Start Banner */}
      <Banner />
      {/* End Banner */}

      {/* Start Container */}
      <section
        className="content-section container mx-auto px-4 py-3
        md:px-24 md:py-12"
      >
        <div
          className="container bg-white rounded-[1.5px] px-4 py-3 
          md:px-12 md:py-6"
        >
          {/* Instructions */}
          <div className="px-4 py-3 bg-[#f1f1f1]">
            <p
              className="text-sm
              md:text-base"
            >
              <span className="font-bold">Instructions:</span> Click on a card
              to activate it, and if the activation of two cards match, it will
              be considered as a point, but if the number of turns{" "}
              <strong className="text-orange-500">reaches 13</strong>, the cards
              will <strong className="text-red-500">reset</strong>. You must
              complete the puzzle with{" "}
              <strong className="text-green-500">less turn</strong>.
            </p>
          </div>
          {/* Button */}
          <button
            onClick={shuffleCards}
            className="group py-2 px-4 bg-[#313131] text-white rounded mt-4 flex flex-row gap-2 items-center hover:opacity-90 w-full -pl-4 justify-center
            md:w-auto"
          >
            <img
              className="w-6 group-hover:rotate-[360deg] transition-all ease-out"
              src={pokeballImage}
              alt={pokeballImage}
            />
            <span>New Game</span>
          </button>

          {/* Start Card Grid */}
          <div
            className="grid grid-cols-4 gap-2 mt-4
            md:grid-cols-6 md:gap-4"
          >
            {cards.map((card) => (
              <SingeCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          {/* End Card Grid */}

          <p className="text-center mt-4 font-bold text-zinc-900">
            Turns:{" "}
            <span className={turns > 7 ? "text-red-500" : "text-orange-500"}>
              {turns}
            </span>
          </p>
        </div>
      </section>
      {/* End Container */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}

export default App;
