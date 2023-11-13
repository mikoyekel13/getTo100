function Navbar(props) {
  function addPlayer() {
    const newPlayerName = window.prompt("Enter Name");
    props.setPlayersArr((prev) => {
      const newPlayersArr = [...prev];
      newPlayersArr.push({ name: newPlayerName, scores: [], isPlaying: false });
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
      >
        Start Game!
      </button>
    </>
  );
}

export default Navbar;