import { useState } from "react";

function Game() {
  const [gameCount, setGameCount] = useState(0);
  const [randomClicked, setRandomClicked] = useState(false);

  function randomNumber() {
    let randomNum = Math.floor(Math.random() * 100);
    setGameCount(randomNum);
    setRandomClicked(true);
    return randomNum;
  }
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
      <button onClick={randomNumber} disabled={randomClicked}>
        Random Number
      </button>
      <button onClick={() => addNumber(2)}>/2</button>
      <button onClick={() => addNumber("*2")}>*2</button>
      <button onClick={() => plusNumber(+1)}>+1</button>
      <button onClick={() => plusNumber(-1)}>-1</button>
      <h2>{gameCount}</h2>
    </div>
  );
}
export default Game;
