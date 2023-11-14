import { useState } from "react";
import Navbar from "./components/Navbar";
import PlayerScreen from "./components/PlayerScreen";
import "./App.css";
function App() {
  const [players, setPlayers] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [currPlayer, setCurrPlayer] = useState(0);
  return (
    <>
      <Navbar
        setPlayersArr={setPlayers}
        startGame={setStartGame}
        isGame={startGame}
      />
      <div id="screensContainer">
        {players.map((item, index) => (

          <PlayerScreen
            currPlayer={currPlayer}
            changeCurrPlayer={setCurrPlayer}
            playersAmount={players.length}
            isGame={startGame}
            player={item}
            index={index}
            key={index}
            setPlayersArr={setPlayers}
            playersArr={players}
          />

        ))}

      </div>
    </>
  );
}

export default App;
