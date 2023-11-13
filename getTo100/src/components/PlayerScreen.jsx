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
          <h1>Game</h1>
        </div>
      </>
    );
  }
}

export default PlayerScreen;
