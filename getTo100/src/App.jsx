import { useState } from "react";
import Navbar from "./components/Navbar";
import PlayerScreen from "./components/PlayerScreen";
import "./App.css";
function App() {
  const [players, setPlayers] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [currPlayer, setCurrPlayer] = useState(0);
  const [winnersAmount, setWinnersAmount] = useState([]);
  const [idArr, setIdArr] = useState([]);
  return (
    <>
      <Navbar
        setPlayersArr={setPlayers}
        startGame={setStartGame}
        isGame={startGame}
        setIdArr={setIdArr}
      />
      <div id="screensContainer">
        {players.map((item) => (
          <PlayerScreen
            currPlayer={currPlayer}
            changeCurrPlayer={setCurrPlayer}
            playersAmount={players.length}
            winnersAmount={winnersAmount}
            setWinnersAmount={setWinnersAmount}
            isGame={startGame}
            player={item}
            index={item.id}
            key={item.id}
            setPlayersArr={setPlayers}
            playersArr={players}
            idArr={idArr}
            setIdArr={setIdArr}
          />
        ))}
      </div>
    </>
  );
}

export default App;
