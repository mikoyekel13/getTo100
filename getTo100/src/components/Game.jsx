import { useState } from "react";

function Game(props) {
  const [gameCount, setGameCount] = useState(Math.floor(Math.random() * 100));

  function plusNumber(number) {
    setGameCount((prev) => prev + number);
  }
  function addNumber(key) {
    if (key === "*2") {
      setGameCount((prev) => Math.floor(prev * 2));
    } else {
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
      <h2 style={props.isActive ? { color: "black" } : { color: "gray" }}>
        {gameCount}
      </h2>
    </div>
  );
}
export default Game;
