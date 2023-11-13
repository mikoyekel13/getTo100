// import { useState } from "react";
import Game from "../components/Game";

function PlayerScreen(props) {
  //   const [gameCount, setGameCount] = useState(0);
  //   const [randomClicked, setRandomClicked] = useState(false);
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
          <Game
          // shownnum={gameCount}
          // gameCount={setGameCount}
          // buttonFirst={randomClicked}
          // buttonOnce={setRandomClicked}
          />
        </div>
      </>
    );
  }
}

export default PlayerScreen;
