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
          <Game />
        </div>
      </>
    );
  }
}

export default PlayerScreen;
