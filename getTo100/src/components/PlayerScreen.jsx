import Game from "../components/Game";

function PlayerScreen(props) {
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
            isActive={props.currPlayer === props.index}
            index={props.index}
            currPlayer={props.currPlayer}
            playersAmount={props.playersAmount}
            setPlayersArr={props.setPlayersArr}
            playersArr={props.playersArr}
            // startGame={props.startGame}
          />
        </div>
      </>
    );
  }
}

export default PlayerScreen;
