import { useState } from "react";

function Navbar(props) {
  const [id, setId] = useState(0);
  function addPlayer() {
    const newPlayerName = window.prompt("Enter Name");
    props.setPlayersArr((prev) => {
      const newPlayersArr = [...prev];
      newPlayersArr.push({
        name: newPlayerName,
        scores: [],
        isPlaying: false,
        id: id,
      });
      props.setIdArr((prev) => [...prev, id]);
      setId((prev) => prev + 1);
      localStorage.setItem("players", JSON.stringify(newPlayersArr));
      return newPlayersArr;
    });
  }
  return (
    <>
      <button className="navBtn" onClick={() => addPlayer()}>
        Add Player!
      </button>
      <button
        className="navBtn"
        onClick={() => props.startGame((prev) => (prev ? false : true))}
        disabled={props.isGame}
      >
        Start Game!
      </button>
    </>
  );
}

export default Navbar;
