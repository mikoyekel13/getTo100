
function Game(props) {
    function randomNumber() {
        let randomNum = Math.floor(Math.random ()* 100) + 1;
        props.gameCount(randomNum);
        // console.log(randomNum);
        props.buttonOnce(true);
        return randomNum;
    }
    function plusNumber(number) {
        props.gameCount((prev) => prev + number);
    }
 function addNumber(key){
    if(key==='*2'){
        props.gameCount((prev) =>Math.floor( prev*2));
    }else {
        props.gameCount((prev) => Math.floor(prev /2));
    }
 }
    return (
        <div>
            <button onClick={randomNumber} disabled={props.buttonFirst}>Random Number</button>
            <button onClick={() => addNumber(2)}>/2</button>
            <button onClick={() => addNumber('*2')}>*2</button>
            <button onClick={() => plusNumber(+1)}>+1</button>
            <button onClick={() => plusNumber(-1)}>-1</button>
            
        </div>
    )
}
export default Game;