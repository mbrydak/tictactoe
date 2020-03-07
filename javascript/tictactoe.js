const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

const WIN_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('game-board');
let circleTurn;

function changeTurn() {
  circleTurn = !circleTurn;
}
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function setBoardHover() {
  gameBoard.classList.remove(X_CLASS);
  gameBoard.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    gameBoard.classList.add(CIRCLE_CLASS);
  } else {
    gameBoard.classList.add(X_CLASS);
  }
}
function checkWin(currentClass) {
  return WIN_COMBO.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    console.log('winner');
  }
  changeTurn();
  setBoardHover();
}

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHover();
}
startGame();

// place mark
// check for win
// check for draw
