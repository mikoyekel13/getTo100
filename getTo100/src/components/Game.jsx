import { useState } from "react";

function Game(props) {
  const [gameCount, setGameCount] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  function handleCurrPlayer(num) {
    return num + 1 < props.playersAmount ? num + 1 : 0;
  }

  function plusNumber(number) {
    props.changeCurrPlayer((prev) => handleCurrPlayer(prev));
    setSteps((prev) => prev + 1);
    setGameCount((prev) => prev + number);
  }
  function multiplyNumber(key) {
    if (key === "*2") {
      props.changeCurrPlayer((prev) => handleCurrPlayer(prev));
      setSteps((prev) => prev + 1);
      setGameCount((prev) => Math.floor(prev * 2));
    } else {
      props.changeCurrPlayer((prev) => handleCurrPlayer(prev));
      setSteps((prev) => prev + 1);
      setGameCount((prev) => Math.floor(prev / 2));
    }
  }
  function gotToHun() {
    if (gameCount === 100) {
      return (
        <div>
          <button>Start Game</button>
          <br />
          <button>Quit Game</button>
        </div>
      );
    }
    return null;
  }
  console.log(props.isActive);

  return (
    <>
      {gameCount != 100 && (
        <div
          style={
            props.isActive
              ? { border: "green solid 3px" }
              : { border: "transparent solid 3px" }
          }
          className="gameScreen"
        >
          <>
            <button
              disabled={!props.isActive}
              onClick={() => multiplyNumber(2)}
            >
              /2
            </button>
            <button
              disabled={!props.isActive}
              onClick={() => multiplyNumber("*2")}
            >
              *2
            </button>
            <button disabled={!props.isActive} onClick={() => plusNumber(+1)}>
              +1
            </button>
            <button disabled={!props.isActive} onClick={() => plusNumber(-1)}>
              -1
            </button>
          </>
          <p style={props.isActive ? { color: "black" } : { color: "gray" }}>
            Steps: {steps}
          </p>
        </div>
      )}
      {gotToHun()}
      <h2 style={props.isActive ? { color: "black" } : { color: "gray" }}>
        {gameCount}
      </h2>
    </>
  );
}
export default Game;
