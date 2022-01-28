const turnTitle = document.getElementById("game-heading");
const restartButton = document.getElementById("restart-button");
const squares = document.querySelectorAll(".game-square");
const board = new Array(9).fill(null);
const winningCombinations = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 1, 2],
             [0, 4, 8],
             [2, 4, 6]];
let turn = {
    player: "Player 1",
    value: "X"
}
let winner;

const handleAttack = (index) => {
  updateSquare(index);
  winner = findWinningCombinations();
  if(winner || board.filter(t => t !== null).length===9){
    terminateGame();
    turnTitle.textContent = winner ? `${turn.player} Won!` : "Tie Game!";
  }
  else {
    toggleTurn();
    turnTitle.textContent = `${turn.player}'s Turn`;
  }
}

const terminateGame = () => {
  squares.forEach((square,index) => square.disabled = true)
  restartButton.style.display = "block";
}

const updateSquare = (i) => {
  squares[i].disabled= true;
  squares[i].textContent = turn.value;
  board[i] = turn.value;
}

const toggleTurn = () => {
  if(turn.value === "X"){
    turn.value = "O";
    turn.player = "Player 2";
  }
  else {
    turn.value = "X";
    turn.player = "Player 1";
  }
}

const findWinningCombinations = () => {
  for(let combination of winningCombinations){
      const [n1,n2,n3] = combination;
      if(board[n1]){
      if(board[n1] === board[n2] && board[n1] === board[n3]){
         return true;
       }
      }
  }
  return null;
}

const restartGame = () => {
  restartButton.style.display = "none";
  board.fill(null);
  turn.value = "X";
  turn.player = "Player 1";
  winner = null;
  squares.forEach((square) => {
      square.textContent = null;
      square.disabled = false;
  })
  turnTitle.textContent = `Player 1's Turn`;
}

restartButton.addEventListener('click', ()=>restartGame());

squares.forEach((square,index) => {
    square.addEventListener("click",()=>{
        handleAttack(index);
    })
});