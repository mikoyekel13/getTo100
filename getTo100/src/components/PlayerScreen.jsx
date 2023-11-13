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
            currPlayer={props.currPlayer}
            playersAmount={props.playersAmount}
          />
        </div>
      </>
    );
  }
}

export default PlayerScreen;
