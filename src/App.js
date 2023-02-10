import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* Start Banner */}
      <Banner />
      {/* End Banner */}

      {/* Start Container */}
      <div className="container mx-auto px-12 py-6 bg-white">
        <div className="px-4 py-3 bg-[#f1f1f1]">
          <p>
            <span className="font-bold">Instructions:</span> Click on a card to
            activate it, and if the activation of two cards match, it will be
            considered as a point, but if the activation of two cards does not
            match, the cards will reset. You must complete the puzzle with less
            turn.
          </p>
        </div>
        <button className="py-2 px-4 bg-[#313131] text-white rounded mt-4">
          Start Game
        </button>
      </div>
      {/* End Container */}
    </div>
  );
}

export default App;
