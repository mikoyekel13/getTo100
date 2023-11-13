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
          {props.currPlayer === props.index ? (
            <Game isActive={true} currPlayer={props.currPlayer} />
          ) : (
            <Game isActive={false} currPlayer={props.currPlayer} />
          )}
        </div>
      </>
    );
  }
}

export default PlayerScreen;
