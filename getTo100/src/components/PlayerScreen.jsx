import Game from "../components/Game";
import { useState } from "react";

function PlayerScreen(props) {
  const [gameCount, setGameCount] = useState(Math.floor(Math.random() * 100));
  // const [gameCount, setGameCount] = useState(25);

  function handleCurrPlayer(index) {
    return props.idArr[props.idArr.indexOf(index) + 1]
      ? props.idArr[props.idArr.indexOf(index) + 1]
      : props.idArr[0];
  }
  function checkAllWin(arr) {
    let check = false;
    for (let item of props.idArr) {
      if (arr.includes(item)) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    return check;
  }

  function handleWinnerAmount(arr) {
    if (arr.includes(props.index)) {
      return arr;
    } else {
      return [...arr, props.index];
    }
  }

  function checkActive() {
    if (props.currPlayer === props.index && gameCount !== 100) {
      return true;
    } else if (
      props.currPlayer === props.index &&
      !checkAllWin(props.winnersAmount) &&
      gameCount === 100
    ) {
      props.setWinnersAmount((prev) => handleWinnerAmount(prev));
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
            index={props.index}
            currPlayer={props.currPlayer}
            playersAmount={props.playersAmount}
            gameCount={gameCount}
            setGameCount={setGameCount}
            handleCurrPlayer={handleCurrPlayer}
            setPlayersArr={props.setPlayersArr}
            playersArr={props.playersArr}
            setIdArr={props.setIdArr}
            idArr={props.idArr}
            setWinnersAmount={props.setWinnersAmount}
            winnersAmount={props.winnersAmount}
          />
        </div>
      </>
    );
  }
}

export default PlayerScreen;
