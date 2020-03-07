const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
let circleTurn;

function changeTurn() {
  circleTurn = !circleTurn;
}
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function setBoardHover() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
function hadnleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  changeTurn();
  setBoardHover();
}

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.addEventListener('click', hadnleClick, { once: true });
  });
  setBoardHover();
}
startGame();

// place mark
// check for win
// check for draw
