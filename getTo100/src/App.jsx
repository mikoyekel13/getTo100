import { useState } from "react";
import Navbar from "./components/Navbar";
import PlayerScreen from "./components/PlayerScreen";
import "./App.css";
import Game from './components/Game'
function App() {
  const [gameCount, setGameCount] = useState(0);
  const [randomClicked, setRandomClicked] = useState(false);
  // return <>
  //   <div>
  //     <Game gameCount={setGameCount} buttonFirst={randomClicked} buttonOnce={setRandomClicked} />{gameCount}
  //   </div>
  // </>;
  const [players, setPlayers] = useState([]);
  const [startGame, setStartGame] = useState(false);

  return (
    <>
      <Navbar setPlayersArr={setPlayers} startGame={setStartGame} />
      <div id="screensContainer">
        {players.map((item, index) => (
          <PlayerScreen isGame={startGame} player={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
