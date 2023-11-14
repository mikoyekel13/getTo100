import { useState } from "react";

function Game(props) {
  const [steps, setSteps] = useState(0);

  function plusNumber(number) {
    props.changeCurrPlayer((prev) => props.handleCurrPlayer(prev));
    setSteps((prev) => prev + 1);
    props.setGameCount((prev) => prev + number);
  }
  function multiplyNumber(key) {
    if (key === "*2") {
      props.changeCurrPlayer((prev) => props.handleCurrPlayer(prev));
      setSteps((prev) => prev + 1);
      props.setGameCount((prev) => Math.floor(prev * 2));
    } else {
      props.changeCurrPlayer((prev) => props.handleCurrPlayer(prev));
      setSteps((prev) => prev + 1);
      props.setGameCount((prev) => Math.floor(prev / 2));
    }
  }
  function handleStartGame() {
    const currIndex = props.winnersAmount.indexOf(props.index);
    props.setGameCount(Math.floor(Math.random() * 100));
    // props.setGameCount(25);
    setSteps(0);
    const a = [...props.winnersAmount].toSpliced(currIndex, 1);
    props.setWinnersAmount(a);
  }
  function handleQuitGame() {
    let currIndex = props.playersArr.indexOf(props.index);
    props.setPlayersArr((prev) => {
      return [...prev]
        .slice(0, currIndex)
        .concat([...prev].slice(currIndex + 1));
    });
    currIndex = props.idArr.indexOf(props.index);
    props.setIdArr((prev) => {
      return [...prev]
        .slice(0, currIndex)
        .concat([...prev].slice(currIndex + 1));
    });
  }
  function gotToHun() {
    if (props.gameCount === 100) {
      return (
        <div>
          <button onClick={handleStartGame}>Start Game</button>
          <br />
          <button onClick={handleQuitGame}>Quit Game</button>
          <p>Steps:{steps}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      {props.gameCount != 100 && (
        <div
          style={
            props.isActive
              ? { border: "black solid 3px" }
              : { border: "transparent solid 3px" }
          }
          className="gameScreen"
        >
          <>
            <button
              className="gamebuttons"
              disabled={!props.isActive}
              onClick={() => multiplyNumber(2)}
            >
              /2
            </button>
            <button
              className="gamebuttons"
              disabled={!props.isActive}
              onClick={() => multiplyNumber("*2")}
            >
              *2
            </button>
            <button
              className="gamebuttons"
              disabled={!props.isActive}
              onClick={() => plusNumber(+1)}
            >
              +1
            </button>
            <button
              className="gamebuttons"
              disabled={!props.isActive}
              onClick={() => plusNumber(-1)}
            >
              -1
            </button>
          </>
          <p
            id="steps"
            style={props.isActive ? { color: "black" } : { color: "gray" }}
          >
            Steps: {steps}
          </p>
        </div>
      )}
      {gotToHun()}
      <h2 style={props.isActive ? { color: "black" } : { color: "gray" }}>
        {props.gameCount}
      </h2>
    </>
  );
}
export default Game;
