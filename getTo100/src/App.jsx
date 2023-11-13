import "./App.css";
import { useState } from 'react';
import Game from './components/Game'
function App() {
  const [gameCount, setGameCount] = useState(0);
  const [randomClicked, setRandomClicked] = useState(false);
  return <>
    <div>
      <Game gameCount={setGameCount} buttonFirst={randomClicked} buttonOnce={setRandomClicked} />{gameCount}
    </div>
  </>;
}

export default App;
