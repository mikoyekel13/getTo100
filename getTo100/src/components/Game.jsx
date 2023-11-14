import { useState } from "react";

function Game(props) {
  const [gameCount, setGameCount] = useState(25);
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
  function handleStartGame() {
    setGameCount(Math.floor(Math.random() * 100));
    setSteps(0);
  }
  function handleQuitGame(){
    props.setPlayersArr((prev)=> prev.splice(props.index))
  }
  function gotToHun() {
    if (gameCount === 100) {
      return (
        <div>
          <button onClick={handleStartGame} >Start Game</button>
          <br />
          <button onClick={handleQuitGame}>Quit Game</button>
          <p>Steps:{steps}</p>
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
              ? { border: "black solid 3px" }
              : { border: "transparent solid 3px" }
          }
          className="gameScreen"
        >
          <>
            <button className='gamebuttons'
              disabled={!props.isActive}
              onClick={() => multiplyNumber(2)}
            >
              /2
            </button>
            <button  className='gamebuttons'
              disabled={!props.isActive}
              onClick={() => multiplyNumber("*2")}
            >
              *2
            </button>
            <button  className='gamebuttons' disabled={!props.isActive} onClick={() => plusNumber(+1)}>
              +1
            </button>
            <button  className='gamebuttons' disabled={!props.isActive} onClick={() => plusNumber(-1)}>
              -1
            </button>
          </>
          <p id ='steps' style={props.isActive ? { color: "black" } : { color: "gray" }}>
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
