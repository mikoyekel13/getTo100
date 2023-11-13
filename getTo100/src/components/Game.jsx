import { useState } from "react";

function Game(props) {
  const [gameCount, setGameCount] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  function plusNumber(number) {
    setSteps((prev) => prev + 1);
    setGameCount((prev) => prev + number);
  }
  function addNumber(key) {
    if (key === "*2") {
      setSteps((prev) => prev + 1);
      setGameCount((prev) => Math.floor(prev * 2));
    } else {
      setSteps((prev) => prev + 1);
      setGameCount((prev) => Math.floor(prev / 2));
    }
  }
  console.log(props.isActive);
  return (
    <div className="gameScreen">
      <button disabled={!props.isActive} onClick={() => addNumber(2)}>
        /2
      </button>
      <button disabled={!props.isActive} onClick={() => addNumber("*2")}>
        *2
      </button>
      <button disabled={!props.isActive} onClick={() => plusNumber(+1)}>
        +1
      </button>
      <button disabled={!props.isActive} onClick={() => plusNumber(-1)}>
        -1
      </button>
      <p>Steps: {steps}</p>
      <h2 style={props.isActive ? { color: "black" } : { color: "gray" }}>
        {gameCount}
      </h2>
    </div>
  );
}
export default Game;
