import { useState } from "react";
import Navbar from "./components/Navbar";
import PlayerScreen from "./components/PlayerScreen";
import "./App.css";
function App() {
  const [players, setPlayers] = useState([]);
  const [startGame, setStartGame] = useState(false);

  return (
    <>
      <Navbar
        setPlayersArr={setPlayers}
        startGame={setStartGame}
        isGame={startGame}
      />
      <div id="screensContainer">
        {players.map((item, index) => (
          <PlayerScreen isGame={startGame} player={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
