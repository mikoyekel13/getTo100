import { useState } from "react";

function Game() {
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
  return (
    <div className="gameScreen">
      <button onClick={() => addNumber(2)}>/2</button>
      <button onClick={() => addNumber("*2")}>*2</button>
      <button onClick={() => plusNumber(+1)}>+1</button>
      <button onClick={() => plusNumber(-1)}>-1</button>
      <h2>{gameCount}</h2>
    </div>
  );
}
export default Game;
