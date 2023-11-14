import Game from "../components/Game";
import { useState } from "react";

function PlayerScreen(props) {
  const [gameCount, setGameCount] = useState(Math.floor(Math.random() * 100));
  // const [gameCount, setGameCount] = useState(25);

  function handleCurrPlayer(num) {
    return num + 1 < props.playersAmount ? num + 1 : 0;
  }
  function checkAllWin(arr) {
    let check = false;
    for (let i = 0; i < props.playersAmount; i++) {
      if (arr.includes(i)) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    return check;
  }

  function checkActive() {
    if (props.currPlayer === props.index && gameCount !== 100) {
      return true;
    } else if (
      props.currPlayer === props.index &&
      gameCount === 100 &&
      !checkAllWin(props.winnersAmount)
    ) {
      props.setWinnersAmount((prev) => [...prev, props.index]);
      props.changeCurrPlayer((prev) => handleCurrPlayer(prev));
      return false;
    } else {
      return false;
    }
  }
  if (!props.isGame) {
    return (
      <>
        <div className="playerScreen">
          {props.player.name} {"\n"} scores: {props.player.scores}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="playerScreen">
          <h2>{props.player.name}</h2>
          <Game
            changeCurrPlayer={props.changeCurrPlayer}
            isActive={checkActive()}
            currPlayer={props.currPlayer}
            playersAmount={props.playersAmount}
            gameCount={gameCount}
            setGameCount={setGameCount}
            handleCurrPlayer={handleCurrPlayer}
          />
        </div>
      </>
    );
  }
}

export default PlayerScreen;
