let cells = document.querySelectorAll(".row > div");
let playText = document.getElementById('playText');

let spaces = [null, null, null, null, null, null, null, null, null];
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let turns = !spaces.includes(null);
let gameActive = true;
let reload = 


cells.forEach((cell) => {
  cell.addEventListener("click", cellClicked, { once: true });
});

function stopPlaying() {
  cells.forEach((cell) => {
    cell.removeEventListener("click", cellClicked);
  });
}

function cellClicked(spaces) {
  turns += 1;
  event.target.spaces
  if (!spaces[cells]) {
    spaces[cells] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (playerWinner()) {
      playText.textContent = `${currentPlayer} has won!`;
    } else if (turns >= 9) {
      playText.textContent = "Draw!"
      gameActive = false;
      return;
    }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

function playerWinner() {
  if ((cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer
        || cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer
        || cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer
        || cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer
        || cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer
        || cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer
        || cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer
        || cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer)
  ) {
    stopPlaying();
    return true;
  }
};
